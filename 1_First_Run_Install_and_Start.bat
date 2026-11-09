@echo off
title Google AI Pro (5 TB) 2-Year Zero-Cost Automation Console - First Run Setup
cd /d "%~dp0"

echo ======================================================================
echo   Checking environment and virtualenv...
echo ======================================================================
if not exist "venv" (
    echo Creating virtual environment venv...
    python -m venv venv
)

if exist "venv\Scripts\activate.bat" (
    echo Activating venv...
    call venv\Scripts\activate.bat
)

echo.
echo ======================================================================
echo   Installing dependencies via python -m pip...
echo ======================================================================
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python -m playwright install chromium

echo.
echo ======================================================================
echo   Starting Web Console (http://127.0.0.1:8765) ...
echo ======================================================================
start "" "http://127.0.0.1:8765"
python app.py
if errorlevel 1 (
    echo.
    echo App exited with an error. Press any key to inspect...
    pause
)
pause
