# 重新生成 favicon.ico：favicon.svg 的栅格版。
#
# 为什么要它：favicon 聚合服务（Google s2 之类）只收 raster，不收 SVG。只有 SVG 时它们回
# 404 加一张 16x16 全透明 PNG，浏览器拿到透明占位图。SVG 继续留着给支持 SVG 的地方用。
#
# 画法和 src/SuperlightBrowser 的 app.ico 一致（System.Drawing + PNG 帧），不依赖 SVG 渲染器。
# 标记就是 ↗ 箭头，和外链卡片、导航品牌里的 ↗ 同一个含义。
#
# SVG 和 System.Drawing 都是左上原点、y 向下，所以只需按 viewBox 等比缩放，不用翻转。
#
# 只在标记变化时运行：
#   powershell -ExecutionPolicy Bypass -File tools\make-favicon.ps1
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$sizes = 16, 24, 32, 48, 64, 128, 256
$target = Join-Path $PSScriptRoot '..\favicon.ico'
$preview = Join-Path $PSScriptRoot 'favicon-preview.png'
$stripPath = Join-Path $PSScriptRoot 'favicon-strip.png'

# 和 favicon.svg 一致：#1d1d1f 底板 + 白色箭头。
$plateTop = [System.Drawing.Color]::FromArgb(255, 0x28, 0x28, 0x2C)
$plateBottom = [System.Drawing.Color]::FromArgb(255, 0x16, 0x17, 0x1A)
$arrowColor = [System.Drawing.Color]::White

$vb = 32.0    # viewBox = "0 0 32 32"
$cornerR = 9.0  # rect rx="9"

function Add-RoundRect([System.Drawing.Drawing2D.GraphicsPath]$path, [float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
    $d = [float]([Math]::Min([Math]::Min($w, $h), $r * 2))
    $path.AddArc($x, $y, $d, $d, 180, 90)
    $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $path.CloseFigure()
}

function Draw-Mark([System.Drawing.Graphics]$g, [int]$size) {
    $g.Clear([System.Drawing.Color]::Transparent)
    $k = [float]($size / $vb)

    # 底板：rect width=32 height=32 rx=9，几乎铺满，留一点点内边距防边缘发虚。
    $pad = [float]([Math]::Max(0.5, $size * 0.01))
    $span = [float]($size - 2 * $pad - 1)
    $plateRect = New-Object System.Drawing.RectangleF($pad, $pad, $span, $span)
    $platePath = New-Object System.Drawing.Drawing2D.GraphicsPath
    Add-RoundRect $platePath $plateRect.X $plateRect.Y $plateRect.Width $plateRect.Height ($cornerR * $k)
    $plateBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $plateRect, $plateTop, $plateBottom, [System.Drawing.Drawing2D.LinearGradientMode]::Vertical)
    $g.FillPath($plateBrush, $platePath)
    $plateBrush.Dispose()
    $platePath.Dispose()

    # 箭头：原 SVG path，坐标直接乘缩放系数。
    # M11 21.2 L20.2 12 H13.5 V9.5 H24.5 V20.5 H22 V13.8 L12.8 23 Z
    $arrowPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $pts = @(
        (11.0, 21.2), (20.2, 12.0), (13.5, 12.0), (13.5, 9.5),
        (24.5, 9.5),  (24.5, 20.5), (22.0, 20.5), (22.0, 13.8), (12.8, 23.0)
    )
    $poly = New-Object 'System.Drawing.PointF[]' $pts.Count
    for ($i = 0; $i -lt $pts.Count; $i++) {
        $poly[$i] = New-Object System.Drawing.PointF([float]($pts[$i][0] * $k), [float]($pts[$i][1] * $k))
    }
    [void]$arrowPath.AddPolygon($poly)
    $arrowBrush = New-Object System.Drawing.SolidBrush($arrowColor)
    $g.FillPath($arrowBrush, $arrowPath)
    $arrowBrush.Dispose()
    $arrowPath.Dispose()
}

$frames = @()
foreach ($size in $sizes) {
    $bitmap = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bitmap)
    try {
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        Draw-Mark $g $size
    }
    finally {
        $g.Dispose()
    }

    # 非空校验：底板该占满全屏，非透明像素必须远超零。
    $opaque = 0
    for ($y = 0; $y -lt $size; $y++) {
        for ($x = 0; $x -lt $size; $x++) {
            if ($bitmap.GetPixel($x, $y).A -gt 0) { $opaque++ }
        }
    }
    $need = [int]($size * $size * 0.5)
    if ($opaque -lt $need) {
        throw "渲染出来是空的：$size x $size 只有 $opaque / $need 个非透明像素"
    }

    if ($size -eq 256) {
        $bitmap.Save($preview, [System.Drawing.Imaging.ImageFormat]::Png)
    }

    $stream = New-Object System.IO.MemoryStream
    $bitmap.Save($stream, [System.Drawing.Imaging.ImageFormat]::Png)
    $bitmap.Dispose()
    $frames += [pscustomobject]@{ Size = $size; Bytes = $stream.ToArray() }
    $stream.Dispose()
}

# 尺寸对照条：所有帧并排在灰底上，确认小尺寸没糊掉。
$gap = 10
$stripW = 12
foreach ($frame in $frames) { $stripW += $frame.Size + $gap }
$strip = New-Object System.Drawing.Bitmap($stripW, (256 + 20), [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$sg = [System.Drawing.Graphics]::FromImage($strip)
try {
    $sg.Clear([System.Drawing.Color]::FromArgb(255, 128, 128, 128))
    $cx = 12
    foreach ($frame in $frames) {
        $fs = New-Object System.IO.MemoryStream(,$frame.Bytes)
        $fb = New-Object System.Drawing.Bitmap($fs)
        $sg.DrawImage($fb, $cx, (276 - $frame.Size) / 2, $frame.Size, $frame.Size)
        $fb.Dispose()
        $fs.Dispose()
        $cx += $frame.Size + $gap
    }
    $strip.Save($stripPath, [System.Drawing.Imaging.ImageFormat]::Png)
}
finally {
    $sg.Dispose()
    $strip.Dispose()
}

# ICO 目录：PNG 压缩的帧（Vista 之后都能读）。
$file = [System.IO.File]::Create($target)
$writer = New-Object System.IO.BinaryWriter($file)
try {
    $writer.Write([uint16]0)
    $writer.Write([uint16]1)
    $writer.Write([uint16]$frames.Count)

    $offset = 6 + (16 * $frames.Count)
    foreach ($frame in $frames) {
        $dim = if ($frame.Size -ge 256) { 0 } else { $frame.Size }
        $writer.Write([byte]$dim)
        $writer.Write([byte]$dim)
        $writer.Write([byte]0)
        $writer.Write([byte]0)
        $writer.Write([uint16]1)
        $writer.Write([uint16]32)
        $writer.Write([uint32]$frame.Bytes.Length)
        $writer.Write([uint32]$offset)
        $offset += $frame.Bytes.Length
    }

    foreach ($frame in $frames) {
        $writer.Write($frame.Bytes)
    }
}
finally {
    $writer.Dispose()
    $file.Dispose()
}

Write-Host ("wrote {0} ({1} frames, {2} bytes)" -f (Resolve-Path $target), $frames.Count, (Get-Item $target).Length)
Write-Host ("preview {0}" -f (Resolve-Path $preview))
Write-Host ("strip   {0}" -f (Resolve-Path $stripPath))
