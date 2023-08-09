/**
 * Lambda function sends user form data submitted from Ardent Forms website
 * to Amazon Simple Email Service.
 *
 * The initial identity (ardentforms.com) was verified in SES set to 'us-west-1' but that region
 * does not support email receiving. This is why the 'email receiving' option was node available
 * in the dashboard.
 * @link https://docs.aws.amazon.com/ses/latest/dg/regions.html
 */

import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";

// Set the AWS region
const REGION = 'us-west-2';
// Create SES service object
const sesClient = new SESClient({ region: REGION });
// Email address to send to
const recipientEmail = process.env.WM_EMAIL;

const createSendEmailCommand = (toAddress, fromName, fromAddress, fromMessage) => {
    return new SendEmailCommand({
        Destination: {
            ToAddresses: [
                toAddress
            ],
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: `You got a message from ${fromName} - ${fromAddress}: ${fromMessage}`,
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: "TEXT_FORMAT_BODY",
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: `Message from ${fromName}`,
            },
        },
        Source: toAddress,
        ReplyToAddresses: [
            fromAddress
        ]
    });
};

// JavaScript v3 requires this function be named `handler`
export const handler = async (event) => {
    console.log(event);

    // Extract data from the event body
    const { senderName, senderEmail, senderMessage } = event;

    const sendEmailCommand = createSendEmailCommand(
        recipientEmail,
        senderName,
        senderEmail,
        senderMessage
    );

    try {
        return await sesClient.send(sendEmailCommand);
    } catch (error) {
        console.error('Failed to send email.');
        return error;
    }
};