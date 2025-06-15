# flash_cards

## Dev Set Up

Requirements:

1. A C compiler
1. Make
1. Nginx
1. FastCGI ([fcgi2](https://github.com/FastCGI-Archives/fcgi2))
1. SQLite

## Building and Running

This repo is devided into frontend (HTML and JavaScript files) and backend (C files). Both frontend and backend are served by an Nginx server. Starting the Nginx server isn't a blocking task, which means it needs to be stopped after you're done development.

To build the backend:

```
$ make build
```

To start the Ngnix server:

```
$ make start-nginx
```

To run the backend server:

```
$ make run
```

To run the web app, open `http://localhost:7000/` in your web browser.

To stop the Nginx server:

```
$ make stop-nginx
```

To delete backend compilation artifacts:

```
$ make clean
```
