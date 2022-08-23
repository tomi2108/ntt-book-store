# ntt-bookstore

## Scripts

Se corren dentro de las carpetas app y api con el comando:

`npm run [SCRIPT]`

---

### Root ( base )

**Prepare** - Instala las dependencias tanto de la app como de la api.

**Build** - Empaqueta la app (servidor y cliente).

**Start** - Ejecuta la aplicación con interfaz (servidor y cliente).

---

### Api ( servidor )

**Build** - Empaqueta la app (servidor y cliente).

**Start** - Ejecuta la aplicación con interfaz (servidor y cliente).

**Dev** - Ejecuta la aplicación sin interfaz (solo servidor para conectarse con el cliente en modo desarrollo).

**Eslint** - Corre un linter para resaltar errores.

**Test** - Corre los tests.

**ResetDevDb** - Reinicia la base de datos de desarrollo con datos de prueba.

**initializeProdDb** - Inicializa la base de datos con los mismos datos que el comando anterior. No se recomienda.

---

### App ( cliente )

**Build** - Empaqueta la aplicación (Usar el de api).

**Start** - Ejecuta la aplicación sin servidor (solo cliente).

**Dev** - Ejecuta la aplicación en modo desarrollo (solo cliente para conectarse con el servidor en modo desarrollo).

**Eslint** - Corre un linter para resaltar errores.

**Test** - Corre los tests.

---

## Info

La aplicación está pensada para ser empaquetada desde la api que luego usa la app como interfaz.

Url app : https://ntt-bookstore.herokuapp.com/

Usuarios en la base de datos de producción: 
- John, password
- Mike, secret

También podes crear tu usuario mediante el register para ver el funcionamiento completo de la aplicación.
Las contraseñas se guardan encriptadas por su seguridad.

---

## Variables de entorno

Las siguientes variables de entorno deben ser definidas en un archivo `.env` en la carpeta `api`.

**MYSQL_PRODUCTION_USER**: Usuario de la base de datos de producción.

**MYSQL_PRODUCTION_PASSWORD**: Contraseña de la base de datos de producción.

**MYSQL_PRODUCTION_HOST**: Host de la base de datos de producción.

**MYSQL_PRODUCTION_DATABASE**: Nombre de la base de datos de producción.

**MYSQL_DEVELOPMENT_USER**: Usuario de la base de datos de desarrollo.

**MYSQL_DEVELOPMENT_PASSWORD**: Contraseña de la base de datos de desarrollo.

**MYSQL_DEVELOPMENT_HOST**: Host de la base de datos de desarrollo.

**MYSQL_DEVELOPMENT_DATABASE**: Nombre de la base de datos de desarrollo.

**JWT_SECRET**: Palabra secreta para la generación de tokens de usuarios.

Las siguientes variables de entorno son gestionadas por la aplicación y no es recomendable alterarlas.

**NODE_ENV**: Entorno de desarrollo de node. ("production" | "development" | "test")

---

## Detalles técnicos

La aplicación fue desarrollada con el uso de las siguiente tecnologías y bibliotecas:

- Eslint como linter para gestionar el formato del código y mantenerlo unificado en todos los archivos del proyecto.

- Husky y Lint-staged para ejecutar el linter en cada commit.

- Jest para el testing tanto de la app como de la api.

- Github actions para la integración continua del proyecto, probando la aplicación automáticamente luego de cada push.

- Cross-env y Dotenv para el manejo de variables de entorno.

- Jsonwebtoken para la gestión de tokens de autentificación de usuarios.

- Bcrypt para el encriptado de las contraseñas de los usuarios.

- Express para el desarrollo y funcionamiento de la api.

- MySql y Sequelize para la base de datos y su conexión con la api.

- Axios para el envió de peticiones desde la aplicación al servidor.

- Bootstrap, Material-UI y CSS para los estilos de la aplicación.

- React para el desarrollo y funcionamiento de la aplicación.

- Heroku para el hosting de la aplicación y de la base de datos