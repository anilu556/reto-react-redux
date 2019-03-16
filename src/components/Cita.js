import React, {Component} from 'react';
import PropTypes from 'prop-types'

//Redux
import { connect } from 'react-redux';
import { borrarCita } from '../actions/citasActions'

class Cita extends Component {

    eliminarCita = () => {
        //console.log(`Eliminando cita ${this.props.info.id}`)
        this.props.borrarCita(this.props.info.id);
    }
    render() {
        const {nombre, apellido, edad, sintoma} = this.props.info;
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <p className="card-text"><span>Nombre: </span>{nombre}</p>
                    <p className="card-text"><span>Apellido: </span>{apellido}</p>
                    <p className="card-text"><span>Edad: </span>{edad}</p>
                    <p className="card-text"><span>Síntoma: </span>{sintoma}</p>
                    <p className="card-text"></p>

                    <button onClick={this.eliminarCita} className="btn btn-danger">
                        Borrar &times;
                    </button>
                </div>
            </div>
        );
    }
}

Cita.propTypes = {
    info : PropTypes.shape({
        nombre : PropTypes.string.isRequired,
        apellido: PropTypes.string.isRequired,
        edad: PropTypes.string.isRequired,
        sintoma: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }),

    borrarCita: PropTypes.func.isRequired
}

export default connect(null, {borrarCita}) (Cita); 