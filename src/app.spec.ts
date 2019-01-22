import { lambdaHandler } from './app';
import { APIGatewayEvent, Context } from 'aws-lambda';

const event: APIGatewayEvent = null, context: Context = null;

describe('Tests index', () => {
    it('verifies successful response', async () => {
        const result = await lambdaHandler(event, context);

        expect(result.statusCode).toEqual(200);

        const response = JSON.parse(result.body);

        expect(response.message).toEqual('hello world!');
    });
});

