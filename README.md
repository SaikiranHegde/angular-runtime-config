# AngularRuntimeConfig

Feature Toggle
- Set VIEW_USER_LISTING to false in config.json to test feature toggling

Docker Build/Run Commands

1. Building image

    `docker build -f app.Dockerfile -t <tagName> .`

    Eg: `docker build -f app.Dockerfile -t app .`

2. Running the image with runtime config

    `docker run -d -p <port> --name <container-name> -v <Path to config file>:/dist/assets/config <image id>`

    If your config file path is `/Users/saikiranhegde/Documents/config/config.json` then run the command as below,

    Eg: `docker run -d -p 4202:80 --name app -v /Users/saikiranhegde/Documents/config:/dist/assets/config 3c94d158d247`

