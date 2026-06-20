@echo off
echo Committing and pushing changes to main branch...
cd /d "%~dp0"
git add .
git commit -m "Fix ESLint warnings (console.logs and loose comparisons) to resolve Vercel build failure"
git push origin main
pause
