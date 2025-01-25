build:
	mypy --ignore-missing-imports .
	npx tsc

run:
	python3 manage.py runserver
