const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res) => {
	let data = req.body;
	console.log(data);
	if (
		data.name.length === 0 ||
		data.email.length === 0 ||
		data.message.length === 0
	) {
		return res.json({ msg: 'please fill all the fields.' });
	}

	let smtpTransporter = nodemailer.createTransport({
		service: 'Gmail',
		port: 465,
		auth: {
			user: 'davech1228@gmail.com',
			pass: 'h312797426h!',
		},
	});
	let mailOptions = {
		from: data.email,
		to: 'davech1228@gmail.com',
		subject: `message from ${data.name}`,
		html: `
            <h3>Informations</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
            </ul>
            <h3>Message:</h3>
            <p>${data.message}</p>
            `,
	};
	smtpTransporter.sendMail(mailOptions, (error) => {
		try {
			if (error) {
				// console.log(`The mails is: \n ${JSON.stringify(mailOptions)}`);

				return res.status(400).json({ msg: 'Please fill all the fields.' });
			}
			res.status(200).json({ msg: 'Thank you for contacting me.' });
		} catch (error) {
			if (error) return res.status(500).json({ msg: 'There is server error.' });
		}
	});
});

module.exports = router;
