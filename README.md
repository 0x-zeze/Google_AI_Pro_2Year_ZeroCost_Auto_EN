# Google AI Pro (5 TB) 2-Year Zero-Cost Automation Console (English Edition)

> Fully automated pipeline for stacking Google One / Google AI Pro promotional trial tokens up to 24 months (US$0.00 total cost) with automatic renewal cancellation.

---

## Overview

This tool automates the full lifecycle for claiming and stacking Google AI Pro (5 TB) promo offers across Google accounts:
- **Zero Cost Guarantee:** Strict $0.00 verification check before clicking any subscription confirmation.
- **Promo Stacking:** Combines 12-Month base offer with two successive 6-Month extension tokens (12M + 6M + 6M = 24 Months).
- **Auto Unsubscribe Protection:** Automatically navigates to Google Play subscriptions to cancel auto-renewal immediately after stacking, locking in the 2-year expiration date without recurring credit card charges.
- **Dual Auth Support:** Handles standard Google accounts (with recovery email) and 2FA TOTP accounts automatically.
- **Web Dashboard:** Built-in FastAPI + Playwright CDP dashboard with live console logs, real-time step tracking, and proof screenshot capture.

---

## System Requirements

1. **Operating System:** Windows 10/11, macOS, or Linux.
2. **Browser:** Google Chrome installed (default path).
3. **Python:** Python 3.10 or higher.
4. **Network:** Clean US IP (residential proxy or US VPN; Oregon 97201 tax-free billing preset).
5. **Payment Card:** Any valid Visa or Mastercard with international transactions enabled (used strictly for $0.00 AVS verification).

---

## Quick Start Guide

### Option A: Windows (One-Click)
1. First time setup: Double-click `1_First_Run_Install_and_Start.bat`.
2. Subsequent runs: Double-click `2_Start_Console.bat`.
3. Browser will open automatically at: `http://127.0.0.1:8765`.

### Option B: Linux / macOS / Manual CLI
```bash
# 1. Clone repository
git clone https://github.com/0x-zeze/Google_AI_Pro_2Year_ZeroCost_Auto_EN.git
cd Google_AI_Pro_2Year_ZeroCost_Auto_EN

# 2. Setup virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 3. Install dependencies
pip install --upgrade pip
pip install -r requirements.txt
playwright install chromium

# 4. Launch console
python app.py
```
Open your browser at `http://127.0.0.1:8765`.

---

## Configuration & Usage

### 1. Configure Payment Card (Left Panel)
- **Card Number:** 16-digit Visa or Mastercard.
- **Expiry:** Month and Year (e.g. `08` / `29`).
- **CVC:** 3-digit security code.
- **Cardholder Name:** Full name in Latin letters.
- **ZIP Code:** Default `97201` (Oregon Tax-Free state, do not change).
- **Proxy:** Leave empty to use local network / system VPN, or provide `http://user:pass@host:port`.
- Click **Save Config**.

### 2. Import Google Accounts (Right Panel)
Paste your accounts (one per line) in any of the following formats:
```text
email----password----recovery_email
email----password----recovery_email----2FA_key
email/password/recovery_email/2FA_key
email----password----2FA_key
```
Click **Import Accounts List**.

### 3. Execution Pipeline
Click **Start** on an individual account or **Run All Pending Accounts**:
- **Step 1:** Automates login, OTP, and 2FA TOTP verification.
- **Step 2:** Binds tax-free payment profile and applies Layer 1 (12 Months Free / US$0.00).
- **Step 3:** Applies Layer 2 (6 Months Extension / US$0.00 -> 18 Months).
- **Step 4:** Applies Layer 3 (6 Months Cap / US$0.00 -> 24 Months).
- **Step 5:** Cancels renewal on Google Play, captures proof screenshot, and marks account completed.

---

## Project Structure

```text
├── app.py                           # FastAPI web server & state management
├── automation_engine.py             # Playwright CDP automation & promo token injector
├── config.json                      # Local billing & account configuration
├── requirements.txt                 # Python dependencies
├── 1_First_Run_Install_and_Start.bat# Windows one-click setup & launch script
├── 2_Start_Console.bat              # Windows quick launcher
├── run.sh                           # Linux / macOS shell launcher
├── templates/
│   └── index.html                   # Complete English web console interface
├── profiles/                        # Chrome user data cache per account
└── screenshots/                     # Verification screenshots
```

---

## Disclaimer

This project is intended strictly for educational and security research analysis. Use responsibly in accordance with Google's Terms of Service.
