# orm-ecommerce-backend
A back end for an e-commerce site built by configuring a working Express.js API and using Sequelize to interact with a MySQL database.


## Description
This code combines a number of tools commonly used in e-commerce sites to hold a large amount of data about products for sale.  These tools enable data to be stored on a MySQL database, searches and updates are made using a working Express.js API with Sequelize as the interaction mechanism.
    
## Motivation
To understand the process of building and using a back end for a comprehensive e-commerce website that uses the latest software technologies.

## User Story
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Installation and Testing
The application will be invoked by typing the following commands in the GitBash terminal to install the modules required:

```bash
npm install
npm install dotenv
npm install --save sequelize
npm install --save mysql2
```

Then, move to the Powershell terminal & set up the schema & required database by typing the following commands:

SOURCE db/schema.sql;
SHOW DATABASES;
USE ecommerce_db;

Return to the GitBash terminal and type in the following commands to seed the database:

```bash
npm run seed
npm start
```

Once the `App listening on port 3001!` message is received, the user can move to MySQL Workbench and check that each of the Product, Category and Tag tables within the ecommerce_db database have been seeded. 

Then, the user moves to the INSOMNIA core and tests that each of the API routes are working correctly to similate use of the various steps required for an e-commerce website. 

## Walkthrough Video
This walkthrough video shows the GET, POST, PUT and DELETE routes for products, categories and tags being tested in Insomnia Core:

https://drive.google.com/file/d/1bJKVDIfw5xUSZGZ0UJopCnBrkmW6mc1v/view

## GitHub repository URL
https://github.com/rachel-brain/orm-ecommerce-backend