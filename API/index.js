import app from './app';
/**
 * @param {int} val The port number.
 * @returns {int} The port number.
 */
const normalizePort = (val) => {
	const port = parseInt(val, 10);

	if (Number.isNaN(port)) {
		return val;
	}

	if (port >= 0) {
		return port;
	}

	return false;
};

const port = normalizePort(process.env.PORT || '4000');

app.listen(port, () => {
	process.stdout.write(`Server is running on port: ${port}\n`);
});
