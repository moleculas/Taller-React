import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cerrarSesionAccion } from '../redux/usuarioDucks'
import { withRouter } from 'react-router-dom'

const Navbar = (props) => {
    const dispatch = useDispatch()
    const cerrarSesion = () => {
        dispatch(cerrarSesionAccion())
        props.history.push("/login")
    }
    const activo = useSelector(store => store.usuario.activo)
    return (
        <div className="navbar navbar-dark bg-dark p-2 mb-5">
            <Link to="/" className="navbar-brand">App Pokemons</Link>
            <div>
                <div className="d-flex">
                    {
                        activo ? (
                            <>
                                <NavLink
                                    className="btn btn-dark mr-2"
                                    to="/"
                                    exact
                                >
                                    Inicio
                        </NavLink>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => cerrarSesion()}
                                >
                                    Cerrar Sesión
                        </button>
                            </>
                        ) : (
                            <NavLink
                                className="btn btn-dark"
                                to="/login"
                            >
                                Login
                            </NavLink>
                        )
                    }



                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)