import { useState } from "react"

function Header() {
  const [temaOscuro, setTemaOscuro] = useState(false);

  function alternarTema() {
    return setTemaOscuro(!temaOscuro);
  }

  return (
    <div className={`contenedor ${temaOscuro ? 'temaOscuro' : 'temaClaro'}`}>
      <h1> {temaOscuro ? "Tema oscuro" : "Tema claro"} </h1>
      <button className="button" onClick={alternarTema}>Cambiar tema</button>
    </div>
  )
}

export default Header