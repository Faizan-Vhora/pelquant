# EmailJS Setup - GUARANTEED INBOX DELIVERY

## Quick Setup (3 minutes)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with **faizanvhoradev@gmail.com**
3. Verify your email

### Step 2: Add Gmail Service
1. In EmailJS dashboard, click "Add New Service"
2. Select "Gmail"
3. Click "Connect Account"
4. Sign in with **faizanvhoradev@gmail.com**
5. Allow access
6. Service ID will be: `service_xxxxxxx` (copy this)

### Step 3: Create Email Template
1. Click "Email Templates" → "Create New Template"
2. Template Name: "Contact Form"
3. Replace content with:

```
Subject: New Contact from {{from_name}} - Pelquant

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
Sent from Pelquant Contact Form
```

4. Template ID will be: `template_xxxxxxx` (copy this)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your Public Key

### Step 5: Update Code
Replace in these files:

**src/components/Contact.jsx** (line ~17):
```javascript
'service_pelquant', // Replace with your Service ID
'template_contact', // Replace with your Template ID
```

And line ~26:
```javascript
'YOUR_PUBLIC_KEY' // Replace with your Public Key
```

Do the same for:
- `src/pages/ContactPage.jsx`
- `src/pages/CareersPage.jsx`

### Step 6: Rebuild
```bash
npm run build
```

## Why EmailJS?

✅ **Goes to INBOX** (not spam)
✅ **From your Gmail** (faizanvhoradev@gmail.com)
✅ **Free** (200 emails/month)
✅ **No backend needed**
✅ **Works immediately**
✅ **Professional formatting**

## Email Will Look Like:

```
From: faizanvhoradev@gmail.com
To: faizanvhoradev@gmail.com
Subject: New Contact from John Doe - Pelquant

From: John Doe
Email: john@example.com
Company: Acme Inc

Message:
We need help building an AI platform...

---
Sent from Pelquant Contact Form
```

## Test It
1. Complete the setup above
2. Fill out your contact form
3. Check **faizanvhoradev@gmail.com** inbox (NOT spam!)
4. Email arrives in 2-3 seconds

This is the BEST solution for avoiding spam!
