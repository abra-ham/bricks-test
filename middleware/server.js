const express = require('express');
const request = require('request-promise-native');
const cors = require('cors');

const SESSION_HEADER = 'X-REMOTE-UUID';
const BASE_URL = 'https://fakehundredbricks-hbhvbnpqnm.now.sh';

const { PORT = 9001 } = process.env;
const app = express();

app.use(cors());

app.get('/users', (req, res) => {
	request.get({ uri: `${BASE_URL}/users`, json: true })
		.then(response => res.json(response))
		.catch(err => res.status(500).send(err));
});

app.get('/users/:method', (req, res) => {
	const userId = req.get(SESSION_HEADER);

	request.get({ uri: `${BASE_URL}/users/${userId}/${req.params.method}`, json: true })
		.then(response => res.json(response))
		.catch(err => res.status(500).send(err));
});

app.get('/users/:method/:subMethod', (req, res) => {
	const userId = req.get(SESSION_HEADER);
	const { method, subMethod } = req.params;

	request.get({ uri: `${BASE_URL}/users/${userId}/${method}/${subMethod}`, json: true })
		.then(response => res.json(response))
		.catch(err => res.status(500).send(err));
});

app.listen(PORT, () => {
	console.log("Middleware active");
});
