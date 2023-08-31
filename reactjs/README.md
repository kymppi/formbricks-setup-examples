# ReactJs Integration with Formbricks

This repository is an example of how to integrate Formbricks with a ReactJs application.

For a comprehensive step-by-step guide to integrate Formbricks in your app, please refer to the official [Formbricks ReactJs Guide](https://formbricks.com/docs/getting-started/framework-guides#react-js).

## Setup Instructions we Followed

1. Created a new React application:

   ```sh
   npx create-react-app react-js
   ```

2. Navigated to the created application directory:

   ```sh
   cd react-js
   ```

3. Installed existing dependecies:

   ```sh
   npm install
   ```

4. Installed the Formbricks JS library:

   ```sh
   npm install --save @formbricks/js
   ```

5.Added the below in my [src/App.js](./src/App.js) file:

   ```js
   import formbricks from "@formbricks/js";

   if (typeof window !== "undefined") {
      formbricks.init({
         environmentId: "<environment-id>",
         apiHost: "<api-host>",
         debug: true, // remove when in production
      });
   }
   ```

6. Edited the Formbricks Enviornment ID and API Host

7. Start the React development server:

   ```sh
   npm start
   ```

With these steps, we had a running ReactJs application with Formbricks integrated.
