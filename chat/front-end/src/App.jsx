import React, { useContext } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./componentes/Navbar";
import Chat from './componentes/Chat'
import Login from './Login'
import { ChatContext } from './context/ChatProvider'

function App() {

  const { usuario } = useContext(ChatContext)

  return (
    <div >
      <Navbar />
      {usuario.activo ? <Chat /> : <Login />}
    </div>
  );
}

export default App;
