# Gestión de Usuarios y Roles (Node.js + SQLite)

Este proyecto implementa un backend con Node.js y Express que permite gestionar **roles** y **usuarios**, utilizando una base de datos local en SQLite.

---

##Estructura del Proyecto

backend/
├── controllers/
│ ├── rolController.js
│ └── userController.js
├── db/
│ └── DB.js
├── routes/
│ ├── rolRoutes.js
│ └── userRoutes.js
├── user_roles.db # (se crea automáticamente)
├── app.js
└── server.js

2. Instala las dependencias

npm install
3. Ejecuta el servidor
npm start

Esto iniciará el backend en:
http://localhost:5000
