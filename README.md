# Trianafy

Api Rest creada con node y mongoDB.

## Pasos para ejecutar el proyecto

Instale las dependencias.
Cree un fichero .env que contenga estas variables de entorno:
- PORT=4141
- DB_URI=mongodb://localhost/trianafy
- JWT_SECRET=(Clave para el cifrado)
- BCRYPT_ROUNDS=12 (Rondas de encriptación)
- JWT_LIFETIME (Tiempo de vida del token)
- JWT_ALGORITHM=HS256 (Algoritmo de cifrado)

Para iniciar la aplicacion ejecute el comando _npm start_

Dispone de una colección de PostMan para ejecutar las peticiones. Tambien dispone de 2 ficheros json, uno con canciones y otro con usuarios.
Las playlist deben crearse a mano.
