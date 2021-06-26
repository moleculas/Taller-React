import React from 'react'
// hooks react redux
import { useDispatch, useSelector } from 'react-redux'
// importamos la acción
import { siguientePokemonAccion, anteriorPokemonAccion, obtenerPokemonesAccion, unPokeDetalleAccion } from '../redux/pokeDucks'
import Detalle from './Detalle'

const Pokemones = () => {
    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)
    return (
        <div className="row">
            <div className="col-md-6">
                <h3>Lista de pokemones</h3>              
                <div className="d-flex justify-content-between">
                    {
                        pokemones.length === 0 &&
                        <button onClick={() => dispatch(obtenerPokemonesAccion())} className="btn btn-dark">Obtener Pokemones</button>
                    }
                    {
                        next &&
                        <button onClick={() => dispatch(siguientePokemonAccion())} className="btn btn-dark">Siguiente Pokemones</button>
                    }
                    {
                        previous &&
                        <button onClick={() => dispatch(anteriorPokemonAccion())} className="btn btn-dark">Anterior Pokemones</button>
                    }
                </div>

                <ul className="list-group mt-3 mb-5">
                    {
                        pokemones.map((item, index) => (
                            <li key={index} className="list-group-item text-uppercase">
                                {item.name}
                                <button
                                    className="btn btn-primary btn-sm float-end"
                                    onClick={() => dispatch(unPokeDetalleAccion(item.url))}
                                >
                                    Detalle
                                    </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-md-6">
                <h3>Detalle Pokemon</h3>
                <Detalle />
            </div>
        </div>
    )
}

export default Pokemones
