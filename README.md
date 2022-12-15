MERN NOTES


How 
REQUEST —> ROUTER —> CONTROLLER —> METHOD 

JWT is not native. Needs to be installed in the root 
Anything in the backend needs to be installed in the root 

Anything involved in the BACKEND needs to be installed in the root 
Anything involving the FRONTEND needs to be installed in the frontend pkageJson folder

How does the app know to use two package folders?
(this goes in the root package json):

"scripts": {
    "server": "nodemon backend/server.js",
    "client": "npm run start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },

Concurrently ^ is a nom package to run front end and back end at the same time
Fdfv


Inside of JWT request is a secret : 

HEADER    - - Who we talking bout 
PAYLOAD   - - What happened 
SIGNATURE / SECRET KEY - - How you found out (validation) 

————————————————————————————————————

If its in the frontend we link with a client route 
If its in the backend we link with a server route


Steps to make the app : this the most complicated part 

Step 1 mkdir then npx create-react-app frontend
Step 2 ls -a into front end folder then rm -rf .git
Step 3 move .gitignore into root from frontend folder
Step 4 git init in the root folder (to get in git repo)
Step 5 in .git ignore : add node_modules/ , .env
Step 6 inside root create package Json . Npm init -y 
Step 7 install in root package json npm I concurrently express 
Step 8 put in scripts above to implement concurrently then npm run dev
Step 9 put in proxy on front end package (“proxy”: “http://localhost:3001 (or whatever server you’re on)
Step 10 in server.js require express. Morgan, dotenv
Step 11 CONNECT TO MDB (server.js needs mongoose.connect(process.env.DATABASE)
/ .env needs DATABASE W MONGO URL , DATABASE_PASSWORD

Part 1 is done when “CONSOLE.LOG DB CONNECTION SUCCESSFUL”

Part 2
In frontend/src/index.js
Import {BrowserRouter as Router) from “react-router-dom”
Then wrap <Router> around <App/> <Router/>

Step 1 Make some folders 
Mkdir in frontend/src components pages utilities
Components touch App.jsx Navbar.jsx SignUpForm.jsx
Pages touch AuthPage.jsx Homepage.jsx NewOrderPage.jsx Orderhistorypage.jsx
Utilities touch users-api.js users-service.js

In backend : Mkdir config controllers models routes 
In backend/controllers & backend/routes make an api folder 

Step 2 write backend/models/userModel.js (mongoose schema) 
Step 3 write backend/controllers/api/userController.js
Step 4 write backend/routes/api/users.js
Step 5 write frontend/src/utilities/users-api.js
Step 6 write frontend/src/utilities/users-service.js
Step 7 write frontend/src/components/signupform.jsx


Again! 
Step 1 mkdir for root then npx create-react-app frontend
Step 2 cd into frontend folder. Ls -a to show git file then rm -rf .git
Step 3 move .gitignore into root folder 
Step 4 inside root create package json npm init -y
Step 5 in .git ignore add “node_modules/ .env
Step 6 git init in root folder (to get in git repo GREEN)ls -a
Step 7 install root packages	npm i express concurrently dotenv jsonwebtoken mongoose morgan serve-favicon bcryptjs react-router-dom
Step 8 make a backend folder. in backend/server.js :
		const express = require('express');
		const app = express()
		const path = require('path');
		// morgan is a logger
		const morgan = require('morgan');
		const favicon = require('serve-favicon');
		const dotenv = require('dotenv');
		dotenv.config()

		// ------------------- MIDDLEWARE 
		app.use(morgan('dev'))
    		// cors is Cross Origin Reference System
    		// bodyparcer json 
		app.use(express.json())

		const port = process.env.PORT || 5001
		app.listen(port, () => {
    		console.log(`listening on ${port} ....`)
})
	
ETC. COPY FROM SERVER.JS

Step 9 make file  .env in root add PORT=5000
Step 10 write middleware in server.js
	app.use(Morgan(‘dev’))
	app.use(express.json())

START UP THE SERVER w npm run dev!!!!


——————————————————————

Step 11 
Mkdir in frontend/src components pages utilities
Components touch App.jsx Navbar.jsx SignUpForm.jsx
Pages touch AuthPage.jsx Homepage.jsx NewOrderPage.jsx Orderhistorypage.jsx
Utilities touch users-api.js users-service.js

Step 12 
Make the sign up form you need :
 - to declare form 

Step 13 make pages 
Step 14 make components 
Step 15 make utilities 

Step 16 make your .env w database info 


Next make a form for the data to go back & forth 
Next look at Jordans cheat sheet. \


Most important mern interview questions 

“ Show me how all the pieces work together “ 

After this.  Make utilities, pages & components 






To create a user/login/signup you need bcrypt

Memorize how to build a component in react 
Node express is backend - 
If you’re using react - master react 





