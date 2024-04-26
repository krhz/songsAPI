# Sistema de Canciones CRUD

¡Bienvenido a SongsAPI!

Saludos 57Blocks team
Este proyecto fue desarrollado con mucho amor por Kevin Hernández, utilizando Node.js, Express, Jest, etc. Siguiendo los principios solid y con intencionalidad de hacerlo escalable se implementó DDD (Domain Driven Desing) identificando dos dominios como lo son Users y Songs, este sistema te permite realizar operaciones como Crear, Leer, Actualizar registros de canciones en una base de datos MongoDB, usando Mongoose como ORM.

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
- Zod
- y más!

## COOL FEATURES 😎😎

Tenemos Middlewares!! - Como podras observar tenemos por el momento dos middlewares encargados de interceptar algunas peticiones y agregarle un poco más de sazón! 😘 - Loggin - Autorize

Tenemos dependencias críticas en la carpeta Helpers, procurando así la reutilización de codigo y componentes transversales en el software

Tenemos Unit Testing!! en el directorio /src/test encontrarás dos ficheros, uno apuntando a algunos de los casos de uso de las canciones (Crear, obtener, obtener las mias), tambien prueba el logearse en el app de users, considero que para los fines de la prueba cumple con lo requerido (es viernes y el cuerpo lo sabe jaja)
PD: agregué un health test para revisar que el app se encuentre respondiendo segun lo esperado

Tenemos (en el directorio /docs) un archivo compatible con postman con tests de integración (Estuve investigando al respecto y quedé como espero que quedes tú al verlos) 😉😉😋

## DISCLAIMER

El repositorio mencionado hace parte del proceso de seleccion en la compañia 57Blocks y no puede ser usado para otros fines a los aqui mencionados.

## Contribuciones

¡Siéntete libre de contribuir al proyecto! Puedes abrir un issue si encuentras algún problema o enviar un pull request con mejoras o nuevas características.

¡Disfruta de la experiencia de gestión de canciones!

**Autor:** Kevin Hernández
