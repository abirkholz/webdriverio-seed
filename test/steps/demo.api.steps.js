import { Given, When, Then } from 'cucumber';
import Request from '../../src/api/Request';
import jp from 'jsonpath';
import chai from 'chai';

When(/^I make a GET request to "(.*?)"$/, (path) => {
	return Request.get(path);
});

Then('I verify request has {string}', (jsonPath) => {
	console.log(jp.query(Request.resp, jsonPath));
	chai.assert.isNotEmpty(jp.query(Request.resp, jsonPath));
});

When(/^I make a PUT request to "(.*?)"$/, (endpoint, something) => {
	//this is just an example
	return Request.put(endpoint, something);
});
