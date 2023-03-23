import React, {useEffect, useState} from "react";
import './Consumir.css'

// Tengo un argumento URL que me servira para pasar la API
export default function Consumir({URL}){
    
    const [all, setall] = useState();
  
    const fetchApi = async () => {
      const response = await fetch(URL);
  
      const responseJSON = await response.json();
      setall(responseJSON);
    }
    // ejecutamos esto desde el inicio
    useEffect(() => {
      fetchApi();
    }, [])
  
    return (
        <div className="App">
          <ul className='My_table'>
          <div class="cabecera">
            Agenda de contactos del ITLA
            </div>
              {/* si la lista esta vacia mostrara el mensaje de cargando hasta que la lista tenga datos */}
            { !all ? 'Cargando....' : 
            // cuando la lista tenga datos esta sera mapeada
            
            all.map((all,index)=>{
              return(
                <div className='tabla'>
             
                <table className="My_table">
                    <tr className="filaTable">
                        <th className="ths">Nombre</th>
                        <th className="ths">Apellido</th>
                        <th className="ths">Telefono</th>
                    </tr>

                    <tbody>
                        <tr className="filaFill">
                            <td className="tds">${all.nombre}</td>
                            <td className="tds">${all.apellido}</td>
                            <td className="tds">${all.telefono}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
              );
            })}
          </ul>
        </div>
      );
}