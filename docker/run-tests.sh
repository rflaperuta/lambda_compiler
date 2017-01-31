#!/usr/bin/env bash
	echo 'COMPOSE BUILD'
	sudo docker-compose build compiler

	echo 'COMPOSE RUN'
	sudo docker-compose run compiler	
	sudo docker-compose run -e DEBUG='*' compiler node index.js
	sudo docker-compose run -e DEBUG='*' compiler npm run test
	test_result=$?

	if [[ -e test-results.xml ]]; then cp test-results.xml ${CIRCLE_TEST_REPORTS}/test-results.xml; fi

	echo 'TEAR DOWN'
	sudo docker-compose down 
  sudo docker-compose stop

	exit ${test_result}
