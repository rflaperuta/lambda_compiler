#!/usr/bin/env bash
	echo 'COMPOSE BUILD'
	sudo docker-compose build compiler

	echo 'COMPOSE RUN'
	sudo docker-compose run compiler	
	sudo docker-compose run -e DEBUG='*' compiler node index.js

	echo 'TEAR DOWN'
	sudo docker-compose down 
  sudo docker-compose stop
