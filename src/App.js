import { useState } from 'react';
import {Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Body';
import "./style.css"

function App() {

  const [alert,setAlert]=useState(false)

  return (
    <div className="App">
    <Alert variant="warning" show={alert} className="alert">
      Her Halinizin Güzel Olduğunu Unutmayın !
    </Alert>
    <Body showAlert={setAlert} />
    </div>
  );
}

export default App;
