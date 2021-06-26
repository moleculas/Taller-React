import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { apiUrl } from "../constantes-f";

export const ChatContext = createContext()

const ChatProvider = (props) => {

    const [mensajes, setMensajes] = useState([])
    const [usuario, setUsuario] = useState({ nombre: null, uid: null, activo: null })
    const [nombreComp, setNombreComp] = useState(null)

    const cargarMensajes = async () => {
        await axios.get(apiUrl + "/api/mensajes/")
            .then(response => {
                setMensajes(response.data)
                return

            }).catch(err => {
                console.log(err.response.data.message)
                window.alert(err.response.data.message)
                return
            })
    }

    useEffect(() => {
        let nombreLS = JSON.parse(localStorage.getItem("nombre"))
        let idLS = JSON.parse(localStorage.getItem("id"))
        if (!nombreLS && !idLS) {
            setUsuario({ nombre: null, uid: null, activo: null })
        } else {
            setUsuario({ nombre: nombreLS, uid: idLS, activo: true })
            cargarMensajes()
        }
    }, [])

    useEffect(() => {
        obtenerNombreComp()
    }, [mensajes])

    const agregarMensaje = async (texto, id) => {
        const nuevoMensaje = {
            mensaje: texto,
            id_user: id
        };

        await axios.post(apiUrl + "/api/mensajes/set", nuevoMensaje)
            .then(response => {
                return
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }

    const logear = async (nombre, password) => {
        const logUsuario = {
            nombre: nombre,
            password: password
        }
        await axios.get(apiUrl + "/api/mensajes/drop")
            .then(response => {
                console.log('bbdd mensajes borrada')
                return

            }).catch(err => {
                console.log(err.response.data.message)
                return
            })
        await axios.post(apiUrl + "/api/usuarios/signin", logUsuario)
            .then(response => {
                setUsuario({ nombre: response.data.nombre, uid: response.data.id, activo: true })
                localStorage.setItem("nombre", JSON.stringify(response.data.nombre))
                localStorage.setItem("id", JSON.stringify(response.data.id))
                cargarMensajes()
                return
            }).catch(err => {
                window.alert(err.response.data.message)
                return
            })
    }

    const registrar = async (nombre, password) => {
        const nuevoUsuario = {
            nombre: nombre,
            password: password
        }
        await axios.post(apiUrl + "/api/usuarios/signup", nuevoUsuario)
            .then(response => {
                console.log(response.data)
                window.alert("Usuario registrado")
                window.location.href = '/'
                return

            }).catch(err => {
                window.alert(err.response.data.message)
                return
            })
    }

    const cerrarSesion = () => {
        setUsuario({ email: null, uid: null, activo: false })
        localStorage.clear()
    }

    const obtenerNombreComp = async () => {
        if (mensajes.length > 0) {
            const mensComp = mensajes.find(item => item.id_user !== usuario.uid)
            if(mensComp){
                const { id_user } = mensComp
            const params = { id: id_user }
            await axios.get(`${apiUrl}/api/usuarios/usuario/${params.id}`)
                .then(response => {
                    setNombreComp(response.data.nombre)
                    return

                }).catch(err => {
                    console.log(err.response.data.message)
                    return
                })
            }else{
                window.alert('No hay ningún usuario conectado') 
            }
        }
    }

    return (
        <ChatContext.Provider value={{ mensajes, usuario, agregarMensaje, logear, registrar, cerrarSesion, nombreComp }}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider