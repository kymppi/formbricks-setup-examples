# NextJs App Directory Integration with Formbricks

This repository is an example of how to integrate Formbricks with a NextJS application with the App directory configuration.

For a comprehensive step-by-step guide to integrate Formbricks in your app, please refer to the official [Formbricks NextJs Guide](https://formbricks.com/docs/getting-started/framework-guides#next-js).

## Setup Instructions we Followed

1. Created a new NextJs application:

   ```sh
   npx create-next-app@latest
   ```

2. Navigated to the created application directory:

   ```sh
   cd nextjs-app
   ```

3. Installed existing dependecies:

   ```sh
   npm install
   ```

4. Installed the Formbricks JS library:

   ```sh
   npm install --save @formbricks/js
   ```

5. Created an [app/formbricks.tsx](./src/app/formbricks.tsx) file and added the below to it:

   ```ts
   "use client";
   import formbricks from "@formbricks/js";
   import { usePathname, useSearchParams } from "next/navigation";
   import { useEffect } from "react";

   export default function FormbricksProvider() {
     const pathname = usePathname();
     const searchParams = useSearchParams();

     useEffect(() => {
       formbricks.init({
         environmentId: "<environment-id>",
         apiHost: "<api-host>",
         debug: true, // remove when in production
       });
     }, []);

     useEffect(() => {
       formbricks?.registerRouteChange();
     }, [pathname, searchParams]);

     return null;
   }
   ```

6. Edited the Formbricks Enviornment ID and API Host

7. Imported and added the `<FormbricksProvider/>` in the [app/layout.tsx](./src/app/layout.tsx) file:

   ```ts
   // other imports
   import FormbricksProvider from "./formbricks";

   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
       <html lang="en">
         // added below in the main layout so it is a parent of all pages
         <FormbricksProvider />
         <body>{children}</body>
       </html>
     );
   }
   ```

8. Started the NextJs development server:

   ```sh
   npm run dev
   ```

With these steps, we had a running NextJs application with Formbricks integrated.
