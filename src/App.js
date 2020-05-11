import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion'


function App() {

  //definir el state 
  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;

    const { artista, cancion } = busquedaLetra;

    const consultarApiLetra = async () => {
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const resultado = await axios.get(url);

      setLetra(resultado.data.lyrics);
    }
    consultarApiLetra();
  }, [busquedaLetra])

  return (
    <Fragment>
      <Formulario
        setBusquedaLetra={setBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
