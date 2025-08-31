#!/bin/bash

echo "Generating SSL certification"
#openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
#openssl rsa -passin pass:x -in server.pass.key -out server.key
#rm server.pass.key
#openssl req -new -key server.key -out server.csr \
#    -subj "/C=UK/ST=Warwickshire/L=Leamington/O=OrgName/OU=IT Department/CN=example.com"
#openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
#echo "SSL Certification Generated!"

openssl req -x509 -nodes -days 365 \
		-newkey rsa:2048 \
		-keyout ./keys/fd_trascendence.key \
		-out	./keys/fd_trascendence.crt \
		-subj "/C=ES/ST=Catalonia/L=Barcelona/O=42Barcelona/OU=42 School/CN=fd_trascendence" \
		> /dev/null 2>&1
echo "SSL Certification Generated!"