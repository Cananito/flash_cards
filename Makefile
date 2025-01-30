build:
	mypy .
	npx tsc

run:
	python3 manage.py runserver
