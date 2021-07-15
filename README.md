<!-- 
# EDA Project
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

We **STRONGLY** recommend following these instructions carefully. It's a lot, and will take some time to set up, but your life will be much easier this way in the long run.

## Use the Template for This Repository (Don't Clone)

- Don't Fork or Clone. Instead, click the `Use this Template` button, and make a copy to your personal account.


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. Import the sample routes JSON file [v2](./PostmanPrimeSoloRoutesv2.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

- [Initial Set](https://vimeo.com/453297271)
- [Server Walkthrough](https://vimeo.com/453297212)
- [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - App/App
  - Footer/Footer
  - Nav/Nav
  - AboutPage/AboutPage
  - InfoPage/InfoPage
  - UserPage/UserPage
  - LoginPage/LoginPage
  - RegisterPage/RegisterPage
  - LogOutButton/LogOutButton
  - ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2 -->



![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Pick Penguins Solo Project

## Description

_Duration: 2 Weeks_

This project took approximately 2 weeks. I set out to create a useable app that can be used for zoo keepers to keep track of fish eaten by penguins.  Penguins, and their feedings can be created, updated, read, and deleted (CRUD).

## Live Demo of the App
Please follow this link to see the App live as I present it!
https://www.facebook.com/primedigitalacademy/videos/539936834112611/?t=2484


### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Visual Studio Code](https://visualstudio.microsoft.com/)

## Installation

1. Create a database named `picky_penguins_app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in a second terminal
5. Navigate to `localhost:5000` to open the app and begin adding penguins, and start feeding

## Usage
How does someone use this application? Tell a user story here.

1. Register
2. <img width="1440" alt="Register" src="https://user-images.githubusercontent.com/78660416/125850935-7b091cc1-381c-4147-a5d8-d553d0087541.png">

3. Login
4. Navigate to View Penguins
5. <img width="1255" alt="Screen Shot 2021-07-15 at 3 08 51 PM" src="https://user-images.githubusercontent.com/78660416/125851038-bd80963a-571b-4149-be9f-0bea3acaccbd.png">

6. Add a new penguin by clicking button on bottom of page
7. <img width="1425" alt="Screen Shot 2021-07-15 at 3 10 03 PM" src="https://user-images.githubusercontent.com/78660416/125851165-97123f28-59d0-4e09-987f-4185e44ffb48.png">
8.Fill out form and submit new bird
9.<img width="432" alt="Screen Shot 2021-07-15 at 3 11 06 PM" src="https://user-images.githubusercontent.com/78660416/125851272-ab798b45-5178-4917-83ab-0c8e9d238ed6.png">

10. Click "Let's start tally" on bottom of home page
11. <img width="422" alt="Screen Shot 2021-07-15 at 3 11 37 PM" src="https://user-images.githubusercontent.com/78660416/125851352-8c4abccb-11f4-42c3-8dcc-8c40d06d91bc.png">
12. Submit feed when completed
13. <img width="1390" alt="Screen Shot 2021-07-15 at 3 12 33 PM" src="https://user-images.githubusercontent.com/78660416/125851519-35e0b595-2566-4254-92cb-924067150ac7.png">
14. View Previous Feeding data by selecting View Feedings in Nav Bar
15. <img width="1409" alt="Screen Shot 2021-07-15 at 3 14 02 PM" src="https://user-images.githubusercontent.com/78660416/125851626-79836a13-527d-45ed-b99e-22ccd7642c26.png">
16. Selecting Penguin Details will show you trends over time
17. <img width="1428" alt="Screen Shot 2021-07-15 at 3 15 13 PM" src="https://user-images.githubusercontent.com/78660416/125851742-da0948b1-265e-48a5-b94d-860e93ccb6e7.png">



## Built With

-Javascript
-Node.js
-JQuery
-PG
-Express
-Passport
-React
-Redux
-Chart.js
-SQL
-MUI
-HTML
-CSS

## License
[MIT](https://choosealicense.com/licenses/mit/)


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)
