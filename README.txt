This FB price tracker app should show me a list of prices of a requested item in ascending order

A WORK IN PROGRESS


Design Plan

Step 1:
Build the scraping server

Need to retrieve an JSON data of the product data through a given product page URL


Suggested Technology: Lambda Scraper - NodeJS powered AWS Lambda function
                      Headless Chromium - candidate to run on AWS Lambda on 


Step 2:
Save the data


Plan: Use a SQL database 

Part I. Got to create the User Interface
part II. Expose a HTTPS endpoint for my server



Step 3:
Monitor prices periodically ( Bonus Feature)


Suggested Technology: Cron Jobs using Serverless


