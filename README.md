Este proyecto es una aplicación Fullstack desarrollada con:

Frontend: React.js

Backend: Node.js + Express

Base de datos: MySQL

🚀 Instalación y ejecución
🔹 Requisitos previos

Antes de comenzar asegúrate de tener instalado:

Node.js (versión LTS recomendada).

MySQL

Git

🔹 Backend (Node.js + Express)

Ve a la carpeta del backend:

cd BACKEND


Instala dependencias:

npm install


Crea un archivo .env dentro de BACKEND/ con la configuración de tu base de datos:

DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=mi_basedatos
PORT=4000


Inicia el servidor:

node index.js


El backend estará disponible en http://localhost:4000

🔹 Frontend (React.js)

Ve a la carpeta del frontend:

cd FRONTEND


Instala dependencias:

npm install


Inicia la aplicación:

npm start


El frontend estará disponible en http://localhost:3000

🔹 Prueba de conexión

Levanta el backend (http://localhost:4000
).

Levanta el frontend (http://localhost:3000
).

Si todo funciona, deberías ver en el navegador la lista de usuarios obtenida desde MySQL 🎉

📌 Tecnologías utilizadas

Frontend: React.js

Backend: Node.js + Express

Base de datos: MySQL

Librerías extra: Axios, dotenv, cors, mysql2