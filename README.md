# Prueba Técnica - Frontend Developer Radar

## 📋 Resumen del Challenge

Tienes **1 hora** para completar este desafío técnico. Tu objetivo es crear una aplicación SPA que se conecte a la PokeAPI para listar Pokémon y mostrar sus detalles.

## 🎯 Objetivos

1. **Conexión a API:** Conectar la aplicación a la PokeAPI para obtener y mostrar una lista de Pokémon
2. **Implementación de Paginado:** Crear una interfaz que permita navegar a través de los resultados de forma paginada
3. **Vista de Detalle:** Desarrollar una página que muestre información específica de un Pokémon seleccionado (imagen y datos relevantes)

## 🛠️ Stack Tecnológico

### Tecnologías Requeridas:

- **[React](https://react.dev/)** - Biblioteca de JavaScript para construir interfaces de usuario
- **[Vite](https://vitejs.dev/)** - Herramienta de construcción rápida para proyectos web modernos
- **[React Router](https://reactrouter.com/)** - Librería de enrutamiento para React
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitario
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes de UI reutilizables construidos con Radix UI y Tailwind CSS
- **[React Query (TanStack Query)](https://tanstack.com/query/latest)** - Librería para gestión del estado del servidor
- **[Axios](https://axios-http.com/)** - Librería para hacer peticiones HTTP

### API a utilizar:

- **[PokeAPI](https://pokeapi.co/)** - API RESTful de Pokémon
  - Endpoint para listar: `https://pokeapi.co/api/v2/pokemon`
  - Endpoint para detalle: `https://pokeapi.co/api/v2/pokemon/{id o nombre}`

## 📝 Requisitos Funcionales

### Página de Listado:
- Mostrar lista de Pokémon con información básica
- Implementar paginación para navegar entre resultados
- Cada item debe ser clickeable para ir al detalle

### Página de Detalle:
- Mostrar imagen del Pokémon
- Mostrar datos relevantes como:
  - Nombre
  - Tipos
  - Estadísticas base
  - Habilidades
  - Altura y peso
- Implementar navegación para volver al listado

## ⚙️ Preparación del Entorno

### Requisitos previos:
- **Node.js** (versión 18 o superior) o **Bun**
- Editor de código con extensiones deshabilitadas para IA (Copilot, Tabnine, etc.)
- Conexión a internet estable

### Durante la prueba:
- Compartir pantalla completa
- Mantener comunicación activa con el equipo evaluador
- No usar asistentes de código con IA

## 💡 Tips y Consideraciones

- Enfócate en la funcionalidad antes que en el diseño perfecto
- Utiliza los componentes de shadcn/ui para acelerar el desarrollo
- Aprovecha React Query para el caché y gestión de estado
- No dudes en hacer preguntas durante la sesión
- Comenta tu proceso de pensamiento mientras programas

## 🚀 Inicio Rápido

```bash
# Clonar el repositorio base (se proporcionará)
git clone [repositorio-base]

# Instalar dependencias
npm install # o yarn install o bun install

# Iniciar servidor de desarrollo
npm run dev # o yarn dev o bun dev
```

## 📊 Criterios de Evaluación

- Proceso de pensamiento y resolución de problemas
- Calidad, claridad y organización del código
- Manejo del estado con React Query
- Familiaridad con el ecosistema React
- Capacidad de comunicación durante la sesión

---

**¡Buena suerte! Estamos emocionados de ver tu solución.** 🎉
