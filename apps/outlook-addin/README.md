## NOTES:

1. NPM install packages in the root folder of `user-interfaces`
2. NPM install packages in the project folder of `user-interfaces/apps/outlook-addin`

-   The Yeoman generator for creating the Outlook add-in uses a manual webpack config (in the project folder). To run this webpack server - `npm run dev-server` in the project directory of `user-interfaces/apps/outlook-addin`

-   The docs says Office Add-ins should use HTTPS - https://docs.microsoft.com/en-us/office/dev/add-ins/quickstarts/outlook-quickstart?tabs=yeomangenerator#tryitout

-   The add-in is currently being side-loaded into the Outlook desktop app.
    Get Add-in > `My add-ins` tab > `Add a custom add-in` button > `Add from file` > manifest.xml
