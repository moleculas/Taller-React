import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Nosotros = () => {

    // const datos = [
    //     { id: 1, nombre: 'ReactJs' },
    //     { id: 2, nombre: 'VueJs' },
    //     { id: 3, nombre: 'AngularJs' }
    // ]

    const [equipo, setEquipo] = useState([])

    useEffect(() => {
        console.log('useEffect')
        // setEquipo(datos)
        obtenerdatos()
    }, [])

    const obtenerdatos = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json()
        setEquipo(users.civilizations)
    }

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item => (

                        <li key={item.id}>
                            <Link to={`/nosotros/${item.id}`}>
                                {item.name} - {item.expansion}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros
