# Docker databases container

Use ```mongo-user-sample.js ``` for create mongo users. **Remember** when run first time containers disabled ```--auth``` command option in docker-compose.

```sh 
docker-compose mongo mongo --host DOCKER_HOST_IP < /path/to/mongo-user-sample.js
```
