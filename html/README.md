# HTML Integration with Formbricks

This repository is an example of how we integrated Formbricks with an HTML file.

For a comprehensive step-by-step guide to integrate Formbricks in your app, please refer to the official [Formbricks HTML Guide](https://formbricks.com/docs/getting-started/framework-guides#HTML).

## Setup Instructions we Followed

1. Created an [index.html](./index.html) file.

2. Added the Formbricks script on top of my HTML file.

   ```html
   <!-- START Formbricks Surveys -->
   <script type="text/javascript">
     !(function () {
       var t = document.createElement("script");
       (t.type = "text/javascript"),
         (t.async = !0),
         (t.src = "https://unpkg.com/@formbricks/js@^1.0.0/dist/index.umd.js");
       var e = document.getElementsByTagName("script")[0];
       e.parentNode.insertBefore(t, e),
         setTimeout(function () {
           window.formbricks = window.js;
           window.formbricks.init({
             environmentId: "<your-environment-id>",
             apiHost: "<api-host>",
           });
         }, 500);
     })();
   </script>
   <!-- END Formbricks Surveys -->
   ```

3. Edited the Formbricks Enviornment ID and API Host

4. It's HTML ;), we just launched the file!

Just with the above, we had a running HTML file with Formbricks integrated.
