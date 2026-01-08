# Add Sports Betting Screenshots to Portfolio
Write-Host "📸 Add Sports Betting Screenshots" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

$targetDir = "D:\Model2025\sports-betting-dashboard\portfolio\sports_betting_images"
if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
}

Write-Host "Target directory: $targetDir" -ForegroundColor Green
Write-Host ""

# Check if images already exist
$existing = Get-ChildItem $targetDir -File -Include *.png,*.jpg,*.jpeg -ErrorAction SilentlyContinue
if ($existing) {
    Write-Host "Existing images:" -ForegroundColor Yellow
    $existing | ForEach-Object { Write-Host "  - $($_.Name)" -ForegroundColor White }
    Write-Host ""
}

Write-Host "Please provide the path to your screenshot images:" -ForegroundColor Yellow
Write-Host ""
Write-Host "Option 1: Enter file paths" -ForegroundColor Cyan
$marketplacePath = Read-Host "Path to marketplace screenshot (or press Enter to skip)"
$insightsPath = Read-Host "Path to player insights screenshot (or press Enter to skip)"

if ($marketplacePath -and (Test-Path $marketplacePath)) {
    $dest = Join-Path $targetDir "marketplace.png"
    Copy-Item $marketplacePath -Destination $dest -Force
    Write-Host "✅ Copied marketplace screenshot" -ForegroundColor Green
}

if ($insightsPath -and (Test-Path $insightsPath)) {
    $dest = Join-Path $targetDir "player_insights.png"
    Copy-Item $insightsPath -Destination $dest -Force
    Write-Host "✅ Copied player insights screenshot" -ForegroundColor Green
}

Write-Host ""
Write-Host "Option 2: Drag and drop images" -ForegroundColor Cyan
Write-Host "  Simply drag your images to: $targetDir" -ForegroundColor White
Write-Host "  Name them: marketplace.png and player_insights.png" -ForegroundColor White

Write-Host ""
Write-Host "Current images in folder:" -ForegroundColor Cyan
Get-ChildItem $targetDir -File | ForEach-Object { Write-Host "  - $($_.Name)" -ForegroundColor White }

