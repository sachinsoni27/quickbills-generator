@echo off
echo Committing and pushing changes to main branch...
cd /d "%~dp0"
git add .
git commit -m "Update README license year and add start script"
git push origin main
pause
