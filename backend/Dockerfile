FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copia los archivos de tu proyecto en el directorio de trabajo
# COPY ./backend .
COPY . .

RUN apt-get update && \
    apt-get install -y openssl

COPY --chmod=744 ./generate-certificate.sh ./entrypoint.sh

RUN ["./entrypoint.sh"]

EXPOSE 443

#CMD ["sh"]
CMD ["npm", "start"]