# Email Setup Guide

## Setup (5 minutes)

Your forms now send emails from **info@pelquant.com** to **faizanvhoradev@gmail.com**.

### Step 1: Create Gmail App Password

1. Go to https://myaccount.google.com/apppasswords
2. Sign in with **info@pelquant.com** (or the Gmail you want to send from)
3. App name: "Pelquant Website"
4. Click "Create"
5. Copy the 16-character password

### Step 2: Add to Netlify Environment Variables

When deploying to Netlify:

1. Go to Site Settings → Environment Variables
2. Add new variable:
   - **Key:** `EMAIL_PASSWORD`
   - **Value:** [paste the 16-character app password]
3. Save

### Step 3: Deploy

```bash
npm run build
```

Then deploy the `dist` folder to Netlify.

## How It Works

- Emails come FROM: info@pelquant.com
- Emails go TO: faizanvhoradev@gmail.com
- Reply-To: Set to the form submitter's email
- Beautiful HTML formatting
- No spam issues
- Professional appearance

## Email Format

You'll receive nicely formatted HTML emails with:
- Clean layout
- Orange accent color (#FF6B2B)
- All form fields clearly labeled
- Professional styling

## Local Testing

For local testing, create `.env` file:

```
EMAIL_PASSWORD=your_app_password_here
```

Then run:
```bash
netlify dev
```

## Alternative: Use Different Email

To send from a different Gmail:
1. Update `user:` in `netlify/functions/send-email.js`
2. Create app password for that Gmail
3. Update `EMAIL_PASSWORD` in Netlify

## Troubleshooting

**Emails not sending?**
- Verify app password is correct
- Check Netlify function logs
- Ensure EMAIL_PASSWORD is set in Netlify

**Still going to spam?**
- This shouldn't happen with your own domain email
- If it does, whitelist info@pelquant.com in Gmail
