# ☕ E-Commerce de Café - CreaTuLanding Bravo

## 📖 Descripción

Aplicación de e-commerce desarrollada con **React** y **Firebase** para comprar diferentes tipos de bebidas calientes como café, infusiones y tés. 

En este proyecto se desarrollo  un carrito de compras funcional, integración con Firebase Firestore y un sistema de checkout completo.

## Características

### Principales funcionalidades y metodologías aplicadas
- **Catálogo de productos** organizado por categorías
- **Carrito de compras** con Context API
- **Detalles de productos** con información completa
- **Sistema de checkout** con formulario de datos y validación
- **Integración Firebase** para productos y órdenes
- **Navegación** con React Router DOM

### Categorías de productos propuestas 
1. **Café** - Latte, Cappuccino, Americano, Mocha, Macchiato, Frappé
2. **Infusiones** - Tizana de frutas, Manzanilla
3. **Té** - Verde y Negro

## Tecnologías Utilizadas

### Frontend
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) **React 19.1.1**
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) **React Router DOM 7.9.4**
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) **CSS3 Custom**
- ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) **Vite**

### Backend & Database
- ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white) **Firebase 12.6.0**
- ![Firestore](https://img.shields.io/badge/Firestore-FFA611?style=for-the-badge&logo=firebase&logoColor=white) **Cloud Firestore**

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── NavBar.jsx              # Barra de navegación
│   ├── CartWidget.jsx          # Widget del carrito
│   ├── CategoriesListContainer.jsx  # Lista de categorías
│   ├── ProductsListContainer.jsx    # Lista de productos
│   ├── ProductItem.jsx         # Item individual de producto
│   ├── ProductDetail.jsx       # Detalle del producto
│   ├── ProductDetailContainer.jsx   # Container del detalle
│   ├── ItemCount.jsx           # Selector de cantidad
│   ├── CartContainer.jsx       # Container del carrito
│   ├── CartView.jsx           # Vista del carrito
│   ├── EmptyCart.jsx          # Carrito vacío
│   ├── Checkout.jsx           # Formulario de checkout
│   ├── LoaderComponent.jsx    # Componente de carga
│   ├── Contact.jsx            # Página de contacto
│   └── Home.jsx               # Página de inicio
├── context/
│   └── CartContext.jsx        # Context API del carrito
├── hooks/
│   ├── useGetProducts.js      # Hook para obtener productos
│   └── useGetProduct.js       # Hook para producto individual
├── data/
│   ├── products.json          # Datos de productos (backup)
│   └── products.js            # Productos exportables
├── services/
│   └── firebase.jsx           # Configuración Firebase
└── assets/
    └── img/                   # Imágenes de productos
```

## Instalación y Configuración

### Prerrequisitos
- **Node.js** (versión 16 o superior)
- **npm** o **yarn**
- Cuenta de **Firebase**

### 1. Clonar el repositorio
```bash
git clone https://github.com/Luis0811bravo/ProyectoFinal_AdrianBravo.git
cd entrega1_AdianBravo
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar Firebase
1. Crear un proyecto en [Firebase Console](https://console.firebase.google.com)
2. Configurar Firestore Database
3. Crear archivo `src/services/firebase.jsx` con tu configuración:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "tu-app-id"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

### 4. Ejecutar la aplicación
```bash
npm run dev
```

## Estructura de Datos

### Productos (Firestore Collection: 'products')
```js
{
  "name": "Café Latte",
  "img": "/assets/img/Latte.jpg",
  "descripcion": "Deliciosa combinación de espresso suave...",
  "categoriaId": 1,
  "precio": 5.00,
  "disponible": true
}
```

### Órdenes (Firestore Collection: 'orders')
```js
{
  "comprador": {
    "name": "Cliente",
    "lastname": "Apellido",
    "address": "Dirección",
    "mail": "email@ejemplo.com"
  },
  "compras": [...productos],
  "total": 25.50,
  "fecha": "timestamp"
}
```

## Características de Diseño

### Componentes Reutilizables
- Botones consistentes (`.btn-add`, `.btn-checkout`)
- Cards uniformes para productos
- Loading spinners personalizados
- Formularios minimalistas

## Funcionalidades del Carrito

### Context API
- **Estado global** del carrito
- **Persistencia** durante la sesión
- **Funciones disponibles**:
  - `addToCart(item, cantidad)`
  - `deleteItem(itemId)`
  - `removeList()` (limpiar carrito)
  - `getTotal()` (calcular total)

### Características
- Agregar productos con cantidad
- Modificar cantidades
- Eliminar productos individuales
- Vaciar carrito completo
- Cálculo automático de totales

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Ejecutar en modo desarrollo

# Producción
npm run build        # Construir para producción
npm run preview      # Previsualizar build

# Calidad
npm run lint         # Revisar código con ESLint
```

## 🚀 Deployment

### Para Vercel:
```bash
npm run build
# Subir carpeta dist/ a Vercel
```

### Para Firebase Hosting:
```bash
npm install -g firebase-tools
firebase init hosting
npm run build
firebase deploy
```

## Autor

**Adrian Bravo**
- GitHub: [@Luis0811bravo](https://github.com/Luis0811bravo)
- Proyecto: Proyecto Final - CoderHouse React

## Licencia

Este proyecto fue desarrollado como parte del curso de React en CoderHouse.

