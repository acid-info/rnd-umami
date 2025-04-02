# Umami Research

Please change the postgres credentials as you want.

## Option 1: docker-compose

1. Check `docker-compose.yaml`

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

2. Run `docker-compose up --build -d`

3. Visit `http://localhost:3000/login` and use `admin` for username and `umami` for password

## Option 2 : docker

1. Run Postgres

```bash
docker run -d \
  --name umami-db \
  -e POSTGRES_DB=umami \
  -e POSTGRES_USER=umami \
  -e POSTGRES_PASSWORD=umami \
  -p 5432:5432 \
  postgres
```

2. Run Umamy

```bash
docker run -d \
  --name umami \
  --link umami-db:db \
  -e DATABASE_URL=postgresql://umami:umami@db:5432/umami \
  -p 3000:3000 \
  docker.umami.is/umami-software/umami:postgresql-latest
```

3. Visit `http://localhost:3000/login` and use `admin` for username and `umami` for password
