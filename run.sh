#!/usr/bin/env bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

echo "======================================================================"
echo "  Google AI Pro (5 TB) 2-Year Zero-Cost Automation Console"
echo "======================================================================"

if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
    source venv/bin/activate
    pip install --upgrade pip
    pip install -r requirements.txt
    playwright install chromium
else
    source venv/bin/activate
fi

echo "Starting Web Console at http://127.0.0.1:8765 ..."
python3 app.py
