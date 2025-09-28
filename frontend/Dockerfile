#frontend
# Imagen base ligera
FROM node:20-slim

# Instalar http-server
RUN npm install -g http-server 

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos estáticos del frontend
COPY . .

RUN mkdir -p /certs

COPY certs/fd_transcendence.key /usr/src/app/certs/fd_transcendence.key
COPY certs/fd_transcendence.crt /usr/src/app/certs/fd_transcendence.crt

# Exponer el puerto
EXPOSE 8081

# Servir el frontend
CMD ["http-server", ".", "-p", "8081", "-S", "-C", "certs/fd_transcendence.crt", "-K", "certs/fd_transcendence.key"]
