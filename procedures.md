# Creation of CI / CD pipeline

-   Prepare [docker-compose.yaml](./docker-compose.yaml)
-   Prepare nodejs [dockerfile](./nodejs/dockerfile)
-   Prepare GitHub Action YAML [Pipeline](./.github/workflows/node.js.yml)
-   Prepare [notify.sh](./notify.sh) script to use Bot to notify ciBuild Telegram Group Chat

```
#!/bin/bash
url='https://api.telegram.org/bot'
url+=$1
url+='/sendMessage?chat_id=-400535008&text=GitHub+api+Build+Pass'
echo ${url}
curl --location --request GET ${url}
```

## Run Deployed container

-   [DockerHub](https://hub.docker.com/r/smarttvminix/consume-api)
-   Pull the Docker Container

```
$ docker pull smarttvminix/consume-api

```

-   Run the container

    -   Method 1 : `$ docker-compose up -d`
    -   Method 2 : `$ docker run -d -it -p 3000:3000 smarttvminix/consume-api:1.0.0`

-   Browser [localhost:3000](http://localhost:3000)

*   Note : need to enable `-it` option due to the way react run the development project

*   To improve, need to deploy a production build version instead of development

## Future Improvement

-   Build using `$ npm run-script build` and this will create the build folder
-   to install onto container

```
$ npm install -g serve
$ serve -s build
```

-   this will create a build folder. Then, use `$ serve -s build -p 3000` to start the server
