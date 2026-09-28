import './App.css'
import Header from './components/Header'
import LibroCard from './components/LibroCard'
import portadaEsferaLuminosa from './assets/la_esfera_luminosa_portada.webp'

function App() {
  const libroEjemplo = {
      categoria: 'Ciencia Ficción',
      titulo: 'La esfera luminosa',
      autor: 'Liu CiXin',
      descripcion: 'Una obra maestra de la ciencia ficción china.',
      imagen: portadaEsferaLuminosa,
      precio: 52000.0,
      stock: 1300,
    }

  return (
    <div>
      <Header/>
      <LibroCard libro={libroEjemplo}/>
    </div>
  )
}

export default App