# Creating a Quart React Todo App

Source guide: https://medium.com/@pgjones/quart-react-tutorial-part-1-1f4e62ef45e5

First create two directories. frontend and backend. 

From the terminal navigate to the 

Install Poetry and Yarn

Yarn

        npm install yarn

Poetry

        pip install poetry

## Setting up the Frontend Toolchain

Install create-react-app to use as a starting point for the React app

        yarn add create-react-app

Then build out the React app in the frontend folder

        yarn create-react-app frontend
        
Once installed test your React app by using the following command.

        yarn start

That's it. The backend tool chain has been built. Next is setting up the backend.


## Setting up Backend Toolchain

From the root directory use the following command to setup the Poetry source files

        poetry new --src backend

Then change the terminal directory to the backend file and use the following command to 
install poetry

        poetry install

You can test the setup with the following command.

        potery run pytest tests/

The backend toolchain is complete. Now moving back to the frontend development.


# Frontend communication to backend

Setup a proxy request in the frontend/package.json file it should include the url
of the backend.

        {
          "name": "frontend",
          "version": "0.1.0",
          "private": true,
          "proxy": "http://localhost:5000",
          "dependencies": {
            "@testing-library/jest-dom": "^5.14.1",
        ...