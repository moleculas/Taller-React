import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'

const User = () => {

const {id} = useParams()

const [pueblo, setPueblo] = useState([])

useEffect(() => {  
    const obtenerdatos = async () => {
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        const pueblo = await data.json()
        setPueblo(pueblo)
    }
    obtenerdatos()
}, [id])

    return (
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.team_bonus}</p>

        </div>
    )
}

export default User
