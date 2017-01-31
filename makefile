# Makefile

test: build teste
run: build
		venv/bin/python app/barrabrasil.py

profile: build
		venv/bin/python app/profile.py

build: venv
		sh ./build.sh $(PROFILE)

venv: venv/bin/activate
venv/bin/activate: requirements.txt package.json
		test -d .env || virtualenv --no-site-packages venv
		venv/bin/pip install -Ur requirements.txt
		touch venv/bin/activate
		npm install

testReport: 
		npm run testReport 

teste:
		docker-compose -f docker/docker-compose.yml up -d
		npm run test
		docker rm -f docker_web_1
		docker rmi -f docker_web


		
		
