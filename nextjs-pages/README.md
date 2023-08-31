# NextJs Pages Directory Integration with Formbricks

This repository is an example of how to integrate Formbricks with a NextJS application with the Pages directory configuration.

For a comprehensive step-by-step guide to integrate Formbricks in your app, please refer to the official [Formbricks NextJs Guide](https://formbricks.com/docs/getting-started/framework-guides#next-js).

## Setup Instructions we Followed

1. Created a new NextJs application:

   ```sh
   npx create-next-app@latest
   ```

2. Navigated to the created application directory:

   ```sh
   cd nextjs-pages
   ```

3. Installed existing dependecies:

   ```sh
   npm install
   ```

4. Installed the Formbricks JS library:

   ```sh
   npm install --save @formbricks/js
   ```

5. Edited the [app/formbricks.tsx](./src/pages/_app.tsx) file:

   ```ts
   // other import
   import formbricks from "@formbricks/js";
   import { useEffect } from "react";
   import { useRouter } from "next/router";

   if (typeof window !== "undefined") {
     formbricks.init({
       environmentId: "<environment-id>",
       apiHost: "<api-host>",
       debug: true, // remove when in production
     });
   }

   export default function App({ Component, pageProps }: AppProps) {
     const router = useRouter();

     useEffect(() => {
       // Connect next.js router to Formbricks
       const handleRouteChange = formbricks?.registerRouteChange;
       router.events.on("routeChangeComplete", handleRouteChange);

       return () => {
         router.events.off("routeChangeComplete", handleRouteChange);
       };
     }, []);
     return <Component {...pageProps} />;
   }
   ```

6. Edited the Formbricks Enviornment ID and API Host

7. Started the NextJs development server:

   ```sh
   npm run dev
   ```

With these steps, we had a running NextJs application with Formbricks integrated.
