import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form'
import Userlist from './components/Userlist';

function App() {

  const [user,setUser] = useState({
    Nombres:'',
    Apellidos:'',
    Telefono:'',
    Correo:''
  })

  const [listUpdated, setlistUpdated] = useState(false)

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = () => {
      fetch('http://localhost:9000/getContactos')
      .then(res => res.json())
      .then(res => setUsers(res))
    }
    getUsers()
    setlistUpdated(false)
    setlistUpdatedDel(false)
  },[listUpdated])

  const [listUpdatedDel, setlistUpdatedDel] = useState(false)

  return (
    <Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-5'>
              <h2 style={{textAlign:'center'}}>Ingreso de Contactos</h2>
              <Form user={user} setUser={setUser}/>
            </div> 
            <div className='col-7'>
              <h2 style={{textAlign:'center'}}>Lista de Contactos</h2>
              <Userlist user={user} users={users} setlistUpdated={setlistUpdated} setlistUpdatedDel={setlistUpdatedDel}/>
            </div>          
          </div>
      </div>
    </Fragment>
  );
}

export default App;
