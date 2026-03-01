# Form Email Setup Guide

## Quick Setup (5 minutes)

Your contact and careers forms are configured to send emails to: **faizanvhoradev@gmail.com**

### Step 1: Get Web3Forms API Key (Free)

1. Go to https://web3forms.com/
2. Click "Get Started Free"
3. Enter your email: faizanvhoradev@gmail.com
4. Verify your email
5. Copy your Access Key

### Step 2: Add API Key to Your Code

Replace `YOUR_WEB3FORMS_KEY` in these files:

**File 1:** `src/pages/ContactPage.jsx`
```javascript
// Line ~40
access_key: 'YOUR_WEB3FORMS_KEY', // Replace with your actual key
```

**File 2:** `src/pages/CareersPage.jsx`
```javascript
// Line ~30
access_key: 'YOUR_WEB3FORMS_KEY', // Replace with your actual key
```

### Step 3: Rebuild and Deploy

```bash
npm run build
```

Then deploy the `dist` folder.

## How It Works

### Contact Form
When someone submits the contact form, you'll receive an email with:
- Name
- Email
- Company (optional)
- Message
- Subject: "New Contact Form Submission from Pelquant"

### Careers Form
When someone applies, you'll receive an email with:
- Full Name
- Email
- Position Applied For
- Location
- Portfolio/LinkedIn/GitHub link
- Resume link
- Why they want to join
- Subject: "New Career Application from Pelquant"

## Features

✅ Email notifications to faizanvhoradev@gmail.com
✅ Success/error messages to users
✅ Form validation
✅ Loading states
✅ Form reset after successful submission
✅ No backend required
✅ 100% free (up to 250 submissions/month)

## Alternative: Use Formspree (Optional)

If you prefer Formspree instead:

1. Go to https://formspree.io/
2. Sign up with faizanvhoradev@gmail.com
3. Create a new form
4. Replace the fetch URL in both files:

```javascript
// Change from:
fetch('https://api.web3forms.com/submit', {

// To:
fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

And remove the `access_key` field.

## Testing

1. Fill out the form on your local dev server
2. Submit
3. Check faizanvhoradev@gmail.com for the email
4. You should see a success message on the form

## Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify the API key is correct
- Check browser console for errors
- Ensure you verified your email with Web3Forms

**Form not submitting?**
- Check browser console for errors
- Verify internet connection
- Try a different browser

## Email Template

The emails will look like this:

```
From: noreply@web3forms.com
To: faizanvhoradev@gmail.com
Subject: New Contact Form Submission from Pelquant

Name: John Doe
Email: john@example.com
Company: Acme Inc
Message: We need help building an AI-powered platform...
```

## Upgrade Options

Web3Forms free tier includes:
- 250 submissions/month
- Email notifications
- Spam protection
- File uploads (if needed)

For more submissions, upgrade at https://web3forms.com/pricing

## Security

✅ No API keys exposed to users
✅ Spam protection included
✅ HTTPS encrypted
✅ GDPR compliant
✅ No data stored (emails sent directly)
