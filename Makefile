build:
  docker-compose build --no-cache --force-rm
stop: 
  docker-compose stop
start:
  docker-compose up -d