import { assert } from 'chai';
import { createUserPayload } from 'resources/payloads';
import { endpoints } from 'services/endpoints';
import { makeGETCall, makePOSTCall } from 'utils/apicalls';
import { logResponseToMochaReport, stringFormatter } from 'utils/formatter';


describe('Posts API service validation tests', () => {

    it('should verify GET comments with, and validate users email address in the response', async function () {
        const comments = stringFormatter(endpoints.COMMENTS, 1);
        const response = await makeGETCall(comments);
        logResponseToMochaReport(this, response);
        assert.equal(response.statusCode, 200)
        assert.notEqual(response.body.lenght, 0, 'post does not have comments');


        let emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

        for (let i = 0; i < response.body.length; i++) {
            let obj = response.body[i];
            let emailAddress = obj.email;
            let isEmailAddressValid = emailRegex.test(emailAddress);
            assert.isTrue(isEmailAddressValid, "Email address is not valid: " + emailAddress)
        }
    });

    it('should verify GET comments call and handle, any handle slow server response', async function () {

        const comments = stringFormatter(endpoints.COMMENTS, 1);

        const SERVER_TIMEOUT_CODE = 504;

        let retries = 10;
        let response = await makeGETCall(comments);

        while (response.statusCode == SERVER_TIMEOUT_CODE && --retries > 0) {
            const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));
            response = await makeGETCall(comments);
            console.log("Did not receive a timely response from an API server");
            console.log("Retry the API call attempt: " + retries)
            waitFor(200)
            console.log(response.statusCode)
        }

        if (response.statusCode == SERVER_TIMEOUT_CODE) throw new Error('Maximum API call retries reached');
        return response;
        logResponseToMochaReport(this, response);
        assert.equal(response.statusCode, 200)
    });

    it('should verify adding an additional POST to the list', async function () {
        const response = await makePOSTCall(endpoints.POSTS, createUserPayload)
        logResponseToMochaReport(this, response);
        assert.equal(response.statusCode, 201)

    });
});
