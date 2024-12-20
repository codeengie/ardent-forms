/**
 * Beginning with Node.js 18.x, AWS Lambda by default uses JavaScript (v3). Why is this
 * important? Because it means the adoption of ES6 modules and including your own packages to
 * create a smaller bundle size. It also means more headaches as you can't use your previous
 * libraries without migrating to the new API. Also, 'aws-sdk' is no longer included, so you'll
 * have to bundle it or use Lambda Layers. I recommend using layers to make life a bit easier.
 */

import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';

const dynamodb = new DynamoDBClient();
const tableName = process.env.TABLE_NAME;
const queryType = 'project'; // Keyword to query the database table's primary key in this case GSI

export const handler = async (event, context) => {
    const command = new ScanCommand({
        TableName: tableName
    });
    const headers = { 'Content-Type': 'application/json' };
    let body;
    let statusCode = '200';

    try {
        // Notice promise() is not required with the new API
        const projects = await dynamodb.send(command);

        if (projects) {

            // For CloudWatch
            const items = projects.Items;

            items.forEach((item) => {
                console.log(item.Title, item.CreatedAt);
            });

            // Convert DynamoDB record into a JavaScript object
            body = projects.Items.map(obj => unmarshall(obj));
        }

    } catch (err) {
        statusCode = '400'; // 400 = client's fault and 500 means server's fault
        body = err.message;
        console.log('Error querying table:', err);
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers
    }
};
