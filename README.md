# flash_cards

## Dev Set Up

Set up venv:

```
$ python3 -m venv venv/
```

Install all Python dependencies:

```
$ source venv/bin/activate
$ python3 -m pip install -r requirements.txt
$ python3 -m pip install Django
$ deactivate
```

Install all JavaScript dependencies:

```
npm install
```

## Building and Running

Activate the Python virtual environment:

```
$ source venv/bin/activate
```

Build:

```
$ make build
```

Run the server:

```
$ make run
```

Once you've finished development tasks for this project, deactivate the Python
virtual environment:

```
$ deactivate
```
