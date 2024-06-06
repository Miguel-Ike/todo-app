<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# To-Do List API

Este proyecto es una práctica para la materia de Tecnología Web INF513-SC. Es una API para gestionar una lista de tareas, implementada utilizando NestJS.

## Pre-requisitos

Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas en tu entorno local:

- **Node.js** (versión 20.14.0)
- **npm** (versión 10.8.1)
- **NestJS CLI** (versión 10.3.2)

Puedes verificar que tienes estas herramientas instaladas ejecutando los siguientes comandos en tu terminal:

```sh
node --version
```

```sh
npm --version
```

```sh
nest --version
```

## Clonar el Repositorio

Para clonar el repositorio, abre tu terminal y ejecuta los siguientes comandos:

### Usando HTTPS

```sh
git clone https://github.com/Miguel-Ike/todo-app.git
```

### Usando SSH

```sh
git clone git@github.com:Miguel-Ike/todo-app.git
```

### Usando GitHub CLI

```sh
gh repo clone Miguel-Ike/todo-app
```

## Instalación

Una vez clonado el repositorio, navega al directorio del proyecto e instala las dependencias necesarias:

```sh
cd todo-app
```

```sh
npm install
```

## Configuración de la Base de Datos

Este proyecto utiliza PostgreSQL como base de datos. Asegúrate de tener PostgreSQL instalado y ejecutándose en tu entorno local. Luego, crea una base de datos para el proyecto.

Crea un archivo `.env` en la raíz del proyecto y añade la configuración de la base de datos:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=todoapp
```

## Ejecución del Proyecto

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```sh
npm run start
```

La API estará disponible en http://localhost:3000.

## Poblar la Base de Datos con Datos de Ejemplo

Puedes usar Postman o cualquier otra herramienta similar para poblar la base de datos con los datos de ejemplo proporcionados en `src/data/tasks.json`.

1. Abre Postman y crea una nueva solicitud.
2. Configura la solicitud como `POST` y establece la URL a `http://localhost:3000/tasks`.
3. En la pestaña `Body`, selecciona `raw` y `JSON` como tipo de contenido.
4. Copia y pega los datos de `src/data/tasks.json` en el cuerpo de la solicitud.
5. Envía la solicitud para poblar la base de datos con los datos de ejemplo.

## Endpoints Disponibles

### Crear una Tarea

- **URL:** `/tasks`
- **Método:** `POST`
- **Body:**

  ```json
  {
    "title": "Comprar leche",
    "description": "Comprar leche en el supermercado"
  }
  ```

### Obtener Todas las Tareas con Paginación y Búsqueda

- **URL:** `/tasks`
- **Método:** `GET`
- **Parámetros de Consulta:**
  - `search` (opcional): Cadena de texto para buscar en título y descripción.
  - `page` (opcional): Número de página.
  - `limit` (opcional): Número de tareas por página.
- **Ejemplo:** `http://localhost:3000/tasks?search=Comprar&page=1&limit=10`

### Actualizar una Tarea

- **URL:** `/tasks/:id`
- **Método:** `PUT`
- **Body:**

  ```json
  {
    "title": "Título actualizado",
    "description": "Descripción actualizada",
    "status": "IN_PROGRESS"
  }
  ```

#### Ejemplo

```sh
curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d '{
  "status": "DONE"
}'
```

### Eliminar una Tarea

- **URL:** `/tasks/:id`
- **Método:** `DELETE`

#### Ejemplo

```sh
curl -X DELETE http://localhost:3000/tasks/1
```

## Contribuciones

Las contribuciones son bienvenidas. Para contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m "Añadir nueva característica"`).
4. Sube tu rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
