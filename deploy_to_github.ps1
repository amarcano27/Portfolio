# Quick GitHub Pages Deployment Script
# This script helps you deploy your portfolio to GitHub Pages

Write-Host "🚀 Portfolio GitHub Pages Deployment" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "📦 Initializing git repository..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Git initialized" -ForegroundColor Green
} else {
    Write-Host "✅ Git repository already initialized" -ForegroundColor Green
}

# Check if .gitignore exists
if (-not (Test-Path .gitignore)) {
    Write-Host "📝 Creating .gitignore..." -ForegroundColor Yellow
    @"
# OS files
.DS_Store
Thumbs.db
desktop.ini

# Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log
"@ | Out-File -FilePath .gitignore -Encoding UTF8
    Write-Host "✅ .gitignore created" -ForegroundColor Green
}

Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Create a new repository on GitHub (e.g., 'portfolio' or 'adrian-marcano-portfolio')" -ForegroundColor White
Write-Host "2. Run these commands:" -ForegroundColor White
Write-Host ""
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m 'Initial portfolio commit'" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git remote add origin https://github.com/amarcano27/YOUR-REPO-NAME.git" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Enable GitHub Pages:" -ForegroundColor White
Write-Host "   - Go to your repository on GitHub" -ForegroundColor Gray
Write-Host "   - Click Settings → Pages" -ForegroundColor Gray
Write-Host "   - Select 'main' branch and '/' folder" -ForegroundColor Gray
Write-Host "   - Click Save" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Your portfolio will be live at: https://amarcano27.github.io/YOUR-REPO-NAME" -ForegroundColor Green
Write-Host ""
Write-Host "💡 Tip: For a custom domain, see DEPLOY.md" -ForegroundColor Cyan
