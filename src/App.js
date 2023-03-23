import './App.css';
import React, {useState, useRef} from "react";
import Consumir from "./Consumir.js"
import Introducir from "./Introducir.js"
import './Introducir.css'

function App() {
  const service = "http://www.raydelto.org/agenda.php";
  const nombreRef = useRef();
  const apellidoRef = useRef(); 
  const telefonoRef = useRef();

  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [telefono, setTelefono] = useState(); 

  const enviarDatos = () => {
    setNombre(nombreRef.current.value);
    setApellido(apellidoRef.current.value);
    setTelefono(telefonoRef.current.value);
  };

  return (
    <div className="App">
      <Consumir URL={service}/>
      <center> 
        
        </center>
      <div className="formulario">
             <fieldset>
            <label for="inpuText">Nombre</label>
            <input type="text" className="inpuText" ref={nombreRef} />
    
            <label for="inpuText2">Apellido</label>
            <input type="text" className="inpuText2" ref={apellidoRef} />
    
            <label for="inpuText3">Telefono</label>
            <input type="text" className="inpuText3" ref={telefonoRef} />
            
            <button onClick={enviarDatos}>Agregar</button>
            </fieldset>
        </div>

      <Introducir URL={service} primerDato={nombre} segundoDato={apellido} tercerDato={telefono} />
    </div>
  );
}

export default App;
