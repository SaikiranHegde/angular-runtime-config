# AngularRuntimeConfig

Feature Toggle
- Set VIEW_USER_LISTING to false in environment.ts to test feature toggling

Docker Build/Run Commands

1. Building image with environment(QA/Staging/Production)

    `docker build -f app.Dockerfile -t <tagName> . --build-arg env=<environment>`

    Eg: `docker build -f app.Dockerfile -t app . --build-arg env=production`

2. Running the image

    `docker run -d -p <port> --name <container-name> <image id>`

    Eg: `docker run -d -p 4202:80 --name app 3c94d158d247`

