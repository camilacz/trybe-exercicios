const express = require('express');
const salesRouter = require('./routes/salesRouter');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/sales', salesRouter);

// errorMiddleware
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
	if (err.status) {
		return res.status(err.status).json({ message: err.message });
	}

	return res.status(500).json({ message: err.message });
});

app.listen(PORT, () => console.log('heeey'));
