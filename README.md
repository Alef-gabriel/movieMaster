## Running the app
# .env file example
```bash
DB_HOST="localhost"
DB_PORT="5432"
DB_USERNAME="postgres"
DB_PASSWORD="postgres"
DB_NAME="movies"
JWT_SECRET="DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE."
REDIS_HOST="localhost"
REDIS_PORT="6379"
REDIS_USERNAME="redis"
REDIS_PASSWORD="redis"
```
```bash
# development
$ docker compose build

# watch mode
$ docker compose up

## Test

```bash
$ npm install

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
