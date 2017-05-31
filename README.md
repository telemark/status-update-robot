[![Build Status](https://travis-ci.org/telemark/status-update-robot.svg?branch=master)](https://travis-ci.org/telemark/status-update-robot)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/minelev-saksbehandler-robot.svg)](https://greenkeeper.io/)

# status-update-robot

Bot for updating status via POST.

## Setup

Update docker.env with correct settings

```bash
DONE_DIRECTORY_PATH=test/directories/done
ERRORS_DIRECTORY_PATH=test/directories/errors
QUEUE_DIRECTORY_PATH=test/directories/queue
RETRY_DIRECTORY_PATH=test/directories/retries
JWT_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
PAPERTRAIL_HOSTNAME=status-robot
PAPERTRAIL_HOST=logs.papertrailapp.com
PAPERTRAIL_PORT=12345
```

## Build

```bash
$ docker build -t status-update-robot .
```

## Usage

```
$ docker run --env-file=docker.env --volume=/test/data/directories/queue:/src/test/directories/queue --rm status-update-robot
```

This will start a container. Do the job. Stop the container and remove it.

## License

[MIT](LICENSE)

![Robohash image of status-update-robot](https://robots.kebabstudios.party/minelev-saksbehandler-robot.png "Robohash image of status-update-robot")