# Sistema de Canciones CRUD

¡Bienvenido/a al sistema de gestión de canciones!

Este proyecto fue desarrollado por Kevin Hernández utilizando las tecnologías más avanzadas en el mundo de Node.js. Con una arquitectura sólida y eficiente, este sistema te permite realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) en una base de datos MongoDB.

## Instalación

Para comenzar, asegúrate de tener Node.js instalado en tu sistema. Luego, clona este repositorio y ejecuta el siguiente comando en tu terminal para instalar las dependencias necesarias:

npm i

## Variables de Entorno

Antes de ejecutar la aplicación, asegúrate de configurar las siguientes variables de entorno:

- `DB_URI`: URI de la base de datos MongoDB donde se almacenarán los datos.
- `JWT_SECRET`: Secreto utilizado para firmar y verificar tokens JWT.
- `MONGO_USER_SCHEMA`: Nombre del esquema de la colección de usuarios en la base de datos.
- `MONGO_SONG_SCHEMA`: Nombre del esquema de la colección de canciones en la base de datos.
- `EXPIRES_IN`: Tiempo de expiración de los tokens JWT, en milisegundos.
- `LOG_LEVEL`: Nivel de detalle de los registros en los registros de la aplicación (DEBUG,INFO,NONE).

## Ejecución

Una vez configuradas las variables de entorno, puedes ejecutar la aplicación en modo desarrollo utilizando el siguiente comando:

npm run dev

Para ejecutar los tests, utiliza el siguiente comando:

npm run test

## Tecnologías Utilizadas

- Node.js 18
- Express
- TypeScript
- Mongoose
- y más!

## Contribuciones

¡Siéntete libre de contribuir al proyecto! Puedes abrir un issue si encuentras algún problema o enviar un pull request con mejoras o nuevas características.

¡Disfruta de la experiencia de gestión de canciones!

**Autor:** Kevin Hernández
