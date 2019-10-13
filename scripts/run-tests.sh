#!/bin/sh

command=$1
service="testing"

docker-compose build --no-cache $service
docker-compose run --rm $service npm run $command

exitCode=$?

docker-compose down
exit $exitCode
