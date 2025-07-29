# PruebaTecnica_FullStackDev_XpertGroup
## Prueba Técnica Desarrollador FullStack - XpertGroup

### 🚀 Proyecto Completo con Microservicios y Frontend Angular

Este proyecto implementa una arquitectura de microservicios con Docker Compose, incluyendo:

- **Service1**: Servicio backend en Node.js + TypeScript + Express (Puerto 3000)
- **Service2**: Servicio backend en Node.js + TypeScript + Express (Puerto 3001)
- **WebApp**: Aplicación frontend en Angular 17 que consume ambos servicios

## 🏗️ Arquitectura

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   WebApp    │    │  Service1   │    │  Service2   │
│  (Angular)  │◄──►│  (Node.js)  │    │  (Node.js)  │
│ Puerto 4200 │    │ Puerto 3000 │    │ Puerto 3001 │
└─────────────┘    └─────────────┘    └─────────────┘
```

## 🚀 Inicio Rápido

### Prerrequisitos
- Docker y Docker Compose instalados

### Ejecutar todo el proyecto

```bash
# Construir y ejecutar todos los servicios
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down
```

### Acceso a los servicios

- **WebApp (Frontend)**: http://localhost:4200
- **Service1 API**: http://localhost:3000
- **Service2 API**: http://localhost:3001

## 📁 Estructura del Proyecto

```
PruebaTecnica_FullStackDev_XpertGroup/
├── Service1/                 # Servicio backend 1
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── Service2/                 # Servicio backend 2
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── WebApp/                   # Aplicación Angular
│   ├── src/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
├── docker-compose.yml        # Orquestación de servicios
└── README.md
```

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js**: Runtime de JavaScript
- **TypeScript**: Lenguaje de programación tipado
- **Express**: Framework web para Node.js
- **CORS**: Middleware para Cross-Origin Resource Sharing

### Frontend
- **Angular 17**: Framework de desarrollo frontend
- **TypeScript**: Lenguaje de programación
- **RxJS**: Programación reactiva
- **Nginx**: Servidor web para producción

### DevOps
- **Docker**: Contenedorización de aplicaciones
- **Docker Compose**: Orquestación de servicios

## 🔧 Desarrollo

### Ejecutar servicios individualmente

```bash
# Service1
cd Service1
npm install
npm run dev

# Service2
cd Service2
npm install
npm run dev

# WebApp
cd WebApp
npm install
npm start
```

### Construir imágenes Docker individualmente

```bash
# Service1
docker build -t service1 ./Service1

# Service2
docker build -t service2 ./Service2

# WebApp
docker build -t webapp ./WebApp
```

## 📊 APIs Disponibles

### Service1 (Puerto 3000)
- `GET /` - Información del servicio
- `GET /health` - Estado de salud

### Service2 (Puerto 3001)
- `GET /` - Información del servicio
- `GET /health` - Estado de salud

## 🎨 Características de la WebApp

- **Interfaz Moderna**: Diseño responsivo con gradientes y efectos visuales
- **Navegación Intuitiva**: Barra de navegación con enlaces a cada servicio
- **Consumo de APIs**: Integración completa con los servicios backend
- **Estados de Carga**: Indicadores visuales durante las peticiones HTTP
- **Manejo de Errores**: Mensajes informativos en caso de fallos de conexión
- **Diseño Responsivo**: Adaptable a dispositivos móviles y tablets

## 🔒 Seguridad

- Headers de seguridad configurados en nginx
- Content Security Policy implementado
- CORS habilitado en los servicios backend
- Validación de tipos con TypeScript

## 📈 Monitoreo

- Logs centralizados con Docker Compose
- Indicadores de estado de salud en cada servicio
- Manejo de errores de conexión en el frontend

## 🚀 Despliegue

### Producción
```bash
# Construir y ejecutar en modo producción
docker-compose -f docker-compose.yml up -d

# Verificar estado de los servicios
docker-compose ps
```

### Desarrollo
```bash
# Ejecutar con logs en tiempo real
docker-compose up

# Reconstruir después de cambios
docker-compose up --build
```
