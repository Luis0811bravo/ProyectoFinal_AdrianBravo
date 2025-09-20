import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido! ¿Qué café te gustaría probar hoy?" />
    </>
  )
}

export default App
