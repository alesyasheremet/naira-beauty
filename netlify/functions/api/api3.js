const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/send-email', async (req, res) => {
 // const { name, email, message } = req.body

  try {
    const transporter = nodemailer.createTransport({
          host: 'smtp-relay.brevo.com',
          port: 587,
          secure: false,
          auth: {
            user: '8fbb97001@smtp-brevo.com',
            pass: 'Bbw1rUYmvF8CqynG' // Not your real Gmail password!
          }
        })
    
        await transporter.sendMail({
          from: 'nairabeauty.website@gmail.com',
          to: 'alesya.sheremet@gmail.com',
          subject: `New message from alesya`,
          text: 'this is a test',
          replyTo: 'nairabeauty.website@gmail.com'
        })

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Failed to send email' })
  }
})

app.listen(3001, () => console.log('Server running on http://localhost:3001'))