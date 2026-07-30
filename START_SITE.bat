@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  start "" "http://localhost:8000/home.html"
  py -m http.server 8000
  exit /b
)
where python >nul 2>nul
if %errorlevel%==0 (
  start "" "http://localhost:8000/home.html"
  python -m http.server 8000
  exit /b
)
echo Python was not found.
echo Open the project through the VS Code Live Server extension so YouTube players receive an HTTP referrer.
pause
