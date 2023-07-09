# Ardent Forms

## Overview
Ardent Forms is my portfolio designed to showcase the websites and applications I've developed in the past and present. Its built using a modern web stack and boasts a responsive design, ensuring a seamless and optimized experience across desktop, tablet, and mobile devices.

## Technology
+ AWS
  + API Gateway
  + CloudFront
  + DynamoDB
  + Lambda
  + Route 53
  + S3
+ CSS3/SCSS
+ HTML5
+ JavaScript
+ Node.js
+ NPM
+ React
+ Vite

## Install
```bash
$ cd ardent-forms
$ npm install
```

## Run
```bash
$ npm run dev # dev
$ npm run build # prod
```

## Deploy
The Jenkinsfile houses the build steps coded in scripted format. It requires a few build parameters to build the environment file, and user with permissions set in AWS to delete/upload to an S3 bucket and invalidate CloudFront cache.
```bash
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "cloudfront:CreateInvalidation",
        "cloudfront:ListInvalidations",
        "cloudfront:GetInvalidation"
      ],
      "Resource": "your-bucket-name"
    }
  ]
}
```

## Developer
[Cesar Villanueva Jr](https://ardentforms.com)

## License
+ You do not have my written, implied or expressed permission to use