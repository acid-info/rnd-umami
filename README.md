# Umami Research

This project sets up the [Umami](https://umami.is/) analytics platform with a PostgreSQL database. As well as a docusaurus Logos.co website with Umami integration through the docusaurus umami plugin located in `packages/docusaurus-plugin-umami`.

> **Note**: Change the default PostgreSQL credentials if you're using this in production.

## Setup the project

```bash
# Install dependencies
yarn setup

# Link the docusaurus umami plugin to the Logos.co site
yarn link:plugin
```

## Running Next.js Test App

```bash
# Start Next.js Test App
yarn next-test:start
```

## Running Logos.co

```bash
# Start Logos.co
yarn logos:start
```

## Running Umami

1. Start Umami services

```bash
# Start Umami services
yarn umami:up

# Stop Umami services
yarn umami:down
```

2. Login to the dashboard:

Visit [http://localhost:3000/login](http://localhost:3000/login)

- **Username**: `admin`
- **Password**: `umami`

## Running Umami manually

### Option 1: Using `docker-compose`

1. Review the `docker-compose.yaml`.

```yaml
version: "3.8"

services:
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: umami
      POSTGRES_USER: umami
      POSTGRES_PASSWORD: umami
    volumes:
      - umami-db-data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U umami"]
      interval: 5s
      timeout: 5s
      retries: 5

  umami:
    image: docker.umami.is/umami-software/umami:postgresql-latest
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://umami:umami@db:5432/umami
    depends_on:
      db:
        condition: service_healthy

volumes:
  umami-db-data:
```

2. Start the containers:

```bash
docker-compose up --build -d
```

3. Access the dashboard:

Open [http://localhost:3000/login](http://localhost:3000/login) in your browser.

- **Username**: `admin`
- **Password**: `umami`

---

### Option 2: Using individual Docker commands

1. Run PostgreSQL:

```bash
docker run -d \
  --name umami-db \
  -e POSTGRES_DB=umami \
  -e POSTGRES_USER=umami \
  -e POSTGRES_PASSWORD=umami \
  -p 5432:5432 \
  postgres:15
```

2. Run Umami:

```bash
docker run -d \
  --name umami \
  --link umami-db:db \
  -e DATABASE_URL=postgresql://umami:umami@db:5432/umami \
  -p 3000:3000 \
  docker.umami.is/umami-software/umami:postgresql-latest
```

3. Login to the dashboard:

Visit [http://localhost:3000/login](http://localhost:3000/login)

- **Username**: `admin`
- **Password**: `umami`
