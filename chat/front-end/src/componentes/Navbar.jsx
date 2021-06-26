import React, { useContext } from 'react'
import logo from "../logo.png"
import { ChatContext } from '../context/ChatProvider'

const Navbar = () => {

    const { usuario, cerrarSesion } = useContext(ChatContext)

    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand ms-2">
                <img src={logo} style={{ width: '35%' }} alt="logo" /> Chat
            </span>
            <div>
                {
                    usuario.activo ? (
                        <button
                            className="btn btn-danger my-2 my-sm-0 me-2"
                            onClick={cerrarSesion}
                        >
                            Cerrar sesión
                        </button>
                    ) : null
                }
            </div>
        </nav>
    )
}

export default Navbar