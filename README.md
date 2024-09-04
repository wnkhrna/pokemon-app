# Pokémon App 


## Overview 

This project is a simple web application that fetches data from the PokéAPI and displays a list of Pokémon. It includes features such as searching and filtering Pokémon, viewing detailed information about each Pokémon, and editing Pokémon details. The app is built using Vue 3, Bootstrap 5.3.x, and Pinia for state management. 


## Table of Contents 

1. Installation 
2. Usage 
3. Features 
4. Contributing 
5. License 
6. Contact 
 

## Installation 
 

### Prerequisites 

- Ensure you have Node.js and npm installed on your machine. 

- Install Vue CLI: 

  ```bash 

  npm install -g @vue/cli 

Clone the Repository 

- Clone the repository to your local machine using the following command: 
 
      git clone https://github.com/WanKhairina/pokemon-app.git 

Navigate to the Project Directory 

     cd pokemon-app 

Install Dependencies 

- Install the necessary dependencies: 

      npm install 

Install Bootstrap 

    npm install bootstrap@5.3.0 

Install Pinia 

    npm install pinia 

Set Up Bootstrap in Your Project 

- Open src/main.js and add the following lines to include Bootstrap: 

      import 'bootstrap/dist/css/bootstrap.min.css'; 
      import 'bootstrap'; 

Usage 

- Running the App Locally 

1. Start the Development Server: 

       npm run serve 

2. Open Your Browser: Navigate to http://localhost:8080 to see the app in action. 

Using GitHub Pages (Optional) 

1. Build the Project: 

       npm run build 

2. Deploy to GitHub Pages:  
   - Ensure your project is pushed to a GitHub repository. 
   - Install gh-pages: 

         npm install gh-pages --save-dev 

   - Add the following scripts to your package.json: 

         "scripts": { 
           "predeploy": "npm run build",
           "deploy": "gh-pages -d dist"
         } 

   - Deploy the app: 

         npm run deploy 

3. Access Your App: Your app will be available at https://your-username.github.io/pokemon-app/. 

Features 

- Fetch Data: Retrieves Pokémon data from the PokéAPI. 
- Display Data Beautifully: Uses Bootstrap cards to display Pokémon data in a responsive grid. 
- Search and Filter: Allows users to search and filter Pokémon by name. 
- Detailed View: Provides detailed information about each Pokémon. 
- Edit Pokémon: Allows users to edit Pokémon details and updates the state using Pinia. 
- Loader Component: Displays a loading spinner while fetching data.  

Contact 

If you have any questions or feedback, please contact me at [wkhairina.00@gmail.com]. 

By following these instructions, you should be able to set up and run your project without any issues. If you have any specific concerns or additional details you'd like to include, let me know! 
