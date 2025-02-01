build:
	$(CC) backend/main.c -lfcgi -o backend/main
	npx tsc

run:
	nginx -p $(CURDIR)/nginx

stop:
	nginx -p $(CURDIR)/nginx -s stop
