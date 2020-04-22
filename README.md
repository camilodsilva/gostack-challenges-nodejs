## NODEJS FUNDAMENTALS

This application was built on NodeJS and the ExpressJS has been used to create
a simple web server which will be able to store GitHub repositories.

This project was deleloped to study those two platforms. Because of it, the
server runs using in memory storage, in other words, each time that the
server is restarted or shuted down, the database will be lost.

## THE ROUTES

The server have five routes:

- `POST repositories/`
- `GET repositories/`
- `PUT repositories/:id`
- `DELETE repositories/:id`
- `POST repositories/:id/like`

And the payloads are:

- `POST repositories/`:

```json
{
  "title": "test",
  "url": "http://aaaaa",
  "techs": ["NodeJS"]
}
```

- `PUT repositories/`:

```json
{
  "title": "test",
  "url": "http://aaaaa",
  "techs": ["NodeJS"]
}
```

## TO RUN THE APPLICATION

To run the application we need to execute:
`yarn install`
or
`npm install`
to get all the dependencies and after run:
`yarn dev`
or
`npm run dev`

## TO RUN THE TESTS

To run the tests:
`yarn test`
or
`npm run test`
