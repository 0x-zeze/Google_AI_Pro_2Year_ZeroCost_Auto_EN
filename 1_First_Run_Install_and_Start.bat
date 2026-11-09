@echo off
title Google AI Pro (5 TB) 2-Year Zero-Cost Automation Console - First Run Setup
cd /d "%~dp0"
echo ======================================================================
echo   Checking and installing Python dependencies (FastAPI, Playwright)...
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
pause
