#!/usr/bin/env bash
	echo 'COMPOSE BUILD'
	sudo docker-compose build --force-rm --no-cache --pull compiler
	echo 'COMPOSE RUN'
	sudo docker-compose run -e DEBUG='*' compiler node index.js
	echo 'TEAR DOWN'
	sudo docker-compose down compiler
  sudo docker-compose stop
