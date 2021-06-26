import React, {useContext, useState } from 'react'

import {ChatContext} from '../context/ChatProvider'

const Agregar = () => {

    const {agregarMensaje, usuario} = useContext(ChatContext)

    const [mensaje, setMensaje] = useState('')

    const handleFormulario = e => {
        e.preventDefault()      
        if(!mensaje.trim()){
            console.log('texto vacío')
            return
        }
        agregarMensaje(mensaje, usuario.uid)
        setMensaje('')      
        window.location.href = '/'  
    }

    return (
        <form 
            className="input-group fixed-bottom p-3 bg-dark"
            onSubmit={handleFormulario}
        >
            <input 
                type="text" 
                className="form-control"
                onChange={e => setMensaje(e.target.value)}
                value={mensaje}
            />
            <div className="input-group-append">
                <button className="btn btn-primary" type="submit">Enviar</button>
            </div>
        </form>
    )
}

export default Agregar
