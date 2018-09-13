require('es6-promise').polyfill();
require('isomorphic-fetch');

class Request {
	constructor() {
		this.resp;
	}

	setResquestBody(body) {
		this.requestBody = body;
	}

	addHeaders(key, value) {
		this.headers[key] = value;
	}

	get(path) {
		return fetch(path, { method: 'GET' })
			.then((response) => {
				return response.json();
			})
			.then((res) => (this.resp = res))
			.catch((error) => console.error('Error:', error));
	}

	put(environment, input) {
		const body = {};
		return fetch(environment + input, {
			method: 'PUT',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.catch((error) => console.error('Error:', error))
			.then((response) => {
				resp = response;
				return resp;
			})
			.catch((error) => console.error('Error:', error));
	}

	post() {
		var createAUserBody = {
			a: 'b',
			c: 'd'
		};
		fetch(url + '/post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(createAUserBody) // body data type must match "Content-Type" header
		})
			.then((res) => res.json())
			.then((error) => console.error('Error:', error))
			.then((response) => {
				resp = response;
				return this.resp;
			});
	}
	delete() {
		const url = '';
		// console.log(url)
		fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'x-request-id': '',
				client_id: '',
				client_secret: ''
			}
		})
			.then((res) => res.json())
			.catch((error) => console.error('Error:', error))
			.then((res) => {
				console.log(res);
			})
			.catch((error) => console.error('Error:', error));
	}
}

export default new Request();
