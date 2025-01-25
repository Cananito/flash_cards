build:
	mypy --ignore-missing-imports .

run:
	python3 manage.py runserver
