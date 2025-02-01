all:
	echo "Choose a specific target"

build-all: build-fe build-be

build-fe:
	npx tsc

build-be: backend/main.c
	$(CC) backend/main.c -lfcgi -o backend/main

start-nginx:
	nginx -p $(CURDIR)/nginx

stop-nginx:
	nginx -p $(CURDIR)/nginx -s stop

run-be: backend/main
	./backend/main
