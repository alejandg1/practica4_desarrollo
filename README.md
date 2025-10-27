# Práctica 4 - API de Usuarios

API REST desarrollada con Express.js y PostgreSQL para la gestión de usuarios.

## Requisitos

- Docker Compose

## Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/alejandg1/practica4_desarrollo.git
cd practica4_desarrollo
```

### 2. Levantar los servicios

```bash
docker-compose up -d --build
```

### 3. Verificar que los servicios están corriendo

```bash
docker-compose ps
```

## Endpoints de la API

La API estará disponible en `http://localhost:5000`

### Crear un usuario

```bash
POST /users

Body:
{
  "dni": "12345678A",
  "nombre": "Juan",
  "apellido": "Pérez",
  "fecha_nacimiento": "1990-05-15",
  "genero": "male",
  "ciudad": "Madrid"
}
```

### Listar usuarios

```bash
GET /users
```
