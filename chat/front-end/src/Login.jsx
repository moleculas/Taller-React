import React, { useState, useEffect, useContext } from "react"
import { ChatContext } from './context/ChatProvider'

const Login = () => {

    const { logear, registrar } = useContext(ChatContext)

    const [nombre, setNombre] = useState('')
    const [esRegistro, setEsRegistro] = useState(false)
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [exito, setExito] = useState(null)
    const [contenidoAlerts, setContenidoAlerts] = useState(null)

    useEffect(() => {
        if (error) {
            const contenidoEr = `<div class="alert mt-3 alert-danger">${error}</div>`
            setContenidoAlerts(contenidoEr)
            setError(null)
        }
        if (exito) {
            const contenidoEx = `<div class="alert mt-3 alert-info">${exito}</div>`
            setContenidoAlerts(contenidoEx)
            setExito(null)
        }
    }, [exito, error]);

    const handleEsRegistro = () => {
        setEsRegistro(!esRegistro)
        setContenidoAlerts(null)
        setNombre('');
        setPassword('')
    }

    const procesarDatos = (e) => {
        e.preventDefault()

        if (!nombre.trim()) {
            setError('Datos vacíos nombre!')
            return
        }
        if (!password.trim()) {
            setError('Datos vacíos pass!')
            return
        }
        if (password.length < 6) {
            setError('6 o más carácteres en pass')
            return
        }
        setError(null)
        if (esRegistro) {
            registrar(nombre, password)
        } else {
            logear(nombre, password)
        }

    }

    return (
        <div className="col-md-4 offset-md-4 mt-5">

            <div className="card bg-light p-4">
                <div className="card-body">
                    <h1 className="h3 card-title">
                        {
                            esRegistro ? 'Registro' : 'Login'
                        }
                    </h1>
                    <form onSubmit={procesarDatos}>
                        <div dangerouslySetInnerHTML={{ __html: contenidoAlerts }} />
                        <div className="row mt-3">
                            <div className="col-12 mb-2">
                                <input
                                    type="text"
                                    className="form-control "
                                    placeholder="Ingresa Nombre"
                                    onChange={e => setNombre(e.target.value)}
                                    value={nombre}
                                />
                            </div>
                            <div className="col-12 mb-2">
                                <input
                                    type="password"
                                    className="form-control "
                                    placeholder="Ingresa Contraseña"
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                        </div>

                        <div className="my-3 d-flex">
                            <button
                                className="d-flex align-items-center btn-primary btn col-6 me-2"
                                type="submit"
                            >
                                {esRegistro ? 'Registrar' : 'Acceder'}
                            </button>
                            <button
                                className="d-flex align-items-center btn-info btn col-6"
                                type="button"
                                onClick={handleEsRegistro}
                            >
                                {esRegistro ? 'Login usuario' : 'Registro usuario'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login