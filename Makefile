CFLAGS=-Wall -Wextra -Werror

run: backend/main
	./backend/main

build: backend/main

backend/main: backend/main.c
	$(CC) $(CFLAGS) backend/main.c -lfcgi -o backend/main

clean:
	rm -f backend/main

start-nginx:
	mkdir -p $(CURDIR)/nginx/logs
	nginx -p $(CURDIR)/nginx

stop-nginx:
	nginx -p $(CURDIR)/nginx -s stop

