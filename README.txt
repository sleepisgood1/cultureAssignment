# cultureAssignment
This was an assignment to create a full stack page for researchers to mark their current experiment pictures as bubbling or not

Github Repo:
https://github.com/sleepisgood1/cultureAssignment

link to demo video:
https://www.loom.com/share/944042965193451b883f7eb24c30d6d8

If you would like to try to demo or use this app, please
1) npm install on the root directory of this repo
2) make sure you have postgresql, node, & nodemon installed on your local machine
3) create a .env file with these variables for the database
(USER=
HOST=
PASSWORD=
DATABASE=
PORT=)
4) run npm build
5) run npm start
6) open up localhost:3000


- Where can we find your project?
A) My Github Repo: https://github.com/sleepisgood1/cultureAssignment
- Please provide the command(s) to run your project:
A) follow these steps:
1) npm install on the root directory of this repo
2) make sure you have postgresql, node, & nodemon installed on your local machine
3) create a .env file with these variables for the database
(USER=
HOST=
PASSWORD=
DATABASE=
PORT=)
4) run npm build
5) run npm start
6) open up localhost:3000
- Please provide any env variables:
A) (USER=
HOST=
PASSWORD=
DATABASE=
PORT=)
There is also an env.example
- Please list anything we need to install to run your project:
A) make sure you have postgresql, node, & nodemon installed on your local machine
- Are there any other details we should know?
A) This was definitely a fun project! A lot of potential improvements and future directions I did think of were: changing photo file format to make page faster, maybe decreasing to loading only 9 per page, creating a Experiment table in the database that links photos to a specific experiment (would most likely be a one(experiment) to a many(photos) relationship, keyboard interaction to mark and submit, sort by date picture was added to database to ensure that the oldest ones get sorted first, deployment with AWS, improving server speed by optimizing db queries, server code, and deploying multiple servers and load balancing with nginx, improving page load speed with improvements mentioned in video as well as changing webpack to production mode, bundling code, server-side rendering, etc. Still I think the general MVP was made with UX considered and definitely tried to take into account my experience of working in research!
Thank you for the opportunity!