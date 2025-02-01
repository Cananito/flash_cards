# flash_cards

## Dev Set Up

Requirements:

1. C compiler.
1. Make.
1. Nginx.
1. FastCGI.
1. SQLite.
1. Node.js (to install TypeScript).

TODO: More details on installation of first 3 reqs?

Install all JavaScript dependencies:

```
npm install
```

TODO: Nginx logs dir set-up (ignored by git).

## Building and Running

This repo is devided into frontend (HTML, TS, and generated JS files) and backend (C files). Both frontend and backend are served by an Nginx server. Starting the Nginx server isn't a blocking task, which means it needs to be stopped after you're done development.

To generate the frontend JS files:

```
$ make build-fe
```

To build the backend:

```
$ make build-be
```

To start the Ngnix server:

```
$ make start-nginx
```

To run the backend server:

```
$ make run-be
```

To stop the Nginx server:

```
$ make stop-nginx
```

To delete generated JS files:

```
$ make clean-fe
```

To delete backend compilation artifacts:

```
$ make clean-be
```
