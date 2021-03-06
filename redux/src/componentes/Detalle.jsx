import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unPokeDetalleAccion } from '../redux/pokeDucks'

const Detalle = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        const fetchData = () => {
            dispatch(unPokeDetalleAccion())
        }
        fetchData()
    }, [dispatch])

    const pokemon = useSelector(store => store.pokemones.unPokemon)
    return pokemon ? (
        <div className="card mt-5 text-center">
            <div className="card-body">
                <img src={pokemon.foto} className="img-fluid" alt=""/>
                <h5 className="card-title text-uppercase">{pokemon.nombre}</h5>
                <p className="card-text">Alto: {pokemon.alto} | Ancho: {pokemon.ancho}</p>
            </div>
        </div>
    ): null
}

export default Detalle
