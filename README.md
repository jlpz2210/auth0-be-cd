
# Management Auth0 API

Basic implementation of the Management API of Auth0




## Run Locally

Clone the project

```bash
  git clone https://github.com/jlpz2210/auth0-be-cd.git
```

Go to the project directory

```bash
  cd auth0-be-cd
```

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`AUTH0_API_IDENTIFIER`

`AUTH0_API_DOMAIN`

`AUTH0_API_CLIENT_ID`

`AUTH0_API_CLIENT_SECRET`

## API Reference

#### Get user info

```http
  GET /api/auth/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Update user Meta Data

```http
  PUT /api/auth/:id
```
#### Body example

```http
    {
        "user_metadata": {
            ...
        }
    }
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to update|

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.
## Authors

- [@jlpz2210](https://github.com/jlpz2210)


## License

[MIT](https://choosealicense.com/licenses/mit/)

