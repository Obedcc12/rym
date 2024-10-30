import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("")
  const [clave, setClave] = useState("")
  const [login, setLogin] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  function cambiarClave(evento) {
    setClave(evento.target.value)
  }

  function acceder() {
    if (usuario == "admin" && clave =="admin"){
      alert("Ingreso exitoso")
      setLogin(true)
    }else{
      alert("Datos de ingreso incorrectos")
    }
  }

  if (login){
    return (
      <>
      <h1>Bienvenido</h1>
      <br />
      <br />
      <br />
      <h4>Soluciones integrales para el sector petrolero</h4>
      </>
    );

  }

  return (
    <>
    <h1>IDB</h1>
    <input placeholder="Usuario" type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>
    <input placeholder="Clave" type="password" name="clave" id="clave" value={clave} onChange={cambiarClave}/>
    <button onClick={acceder}>Ingresar</button>
    </>
    ) 

}

export default App
