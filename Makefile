CONTAINER_NAME=transcendence
IMAGE_NAME=transcendence:latest
HOST_UID := $(shell id -u)
NODE_UID := 1000

# Servicios docker-compose
COMPOSE_BACKEND=transcendence_backend
COMPOSE_FRONTEND=transcendence_frontend
COMPOSE_DB=transcendence_db_server

generate-certs:
	cd backend && ./generate-certificate.sh
	cd frontend && ./generate-certificate.sh

# Construir con docker-compose
build: generate-certs
	docker compose build

# -------------------------
# SECCIÓN: Comandos para docker-compose (RECOMENDADO)
# -------------------------

compose-up: build
	docker compose up -d

compose-down:
	docker compose down

compose-logs:
	docker compose logs -f

compose-shell-back:
	docker exec -it $(COMPOSE_BACKEND) /bin/sh

compose-shell-front:
	docker exec -it $(COMPOSE_FRONTEND) /bin/sh

compose-shell-db:
	docker exec -it $(COMPOSE_DB) /bin/sh

compose-re: compose-down compose-up

compose-test: compose-down compose-up compose-logs

# -------------------------
# SECCIÓN: Comandos legacy (si los necesitas)
# -------------------------

# Target principal - usa compose
up: compose-up

# Logs principal - usa compose
logs: compose-logs

# Shell principal - usa compose
shell: compose-shell-back

# Bajar principal - usa compose
down: compose-down

# Limpiar
clean: compose-down
	docker image prune -a

# Reiniciar
re: compose-re

.PHONY: generate-certs build compose-up compose-down compose-logs compose-shell-back compose-shell-front compose-shell-db compose-re compose-test up logs shell down clean re