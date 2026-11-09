@echo off
title Google AI Pro (5 TB) 2-Year Zero-Cost Automation Console
cd /d "%~dp0"

if exist "venv\Scripts\activate.bat" (
    call venv\Scripts\activate.bat
)

echo ======================================================================
echo   Launching Web Console (http://127.0.0.1:8765) ...
echo ======================================================================
start "" "http://127.0.0.1:8765"
python app.py
pause
