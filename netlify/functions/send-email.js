const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'info@pelquant.com', // Your Gmail
      pass: process.env.EMAIL_PASSWORD // App password
    }
  });

  const mailOptions = {
    from: '"Pelquant Contact Form" <info@pelquant.com>',
    to: 'faizanvhoradev@gmail.com',
    replyTo: data.email,
    subject: data._subject || 'New Form Submission',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #FF6B2B; margin-top: 0;">New Contact Form Submission</h2>
          ${Object.entries(data)
            .filter(([key]) => !key.startsWith('_'))
            .map(([key, value]) => `
              <div style="margin: 15px 0; padding: 10px; background: #f9f9f9; border-left: 3px solid #FF6B2B;">
                <strong style="color: #333;">${key}:</strong>
                <p style="margin: 5px 0 0 0; color: #666;">${value}</p>
              </div>
            `).join('')}
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
