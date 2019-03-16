import React, {Component} from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

//Redux
import { connect} from 'react-redux';
import { getCitas} from '../actions/citasActions';

import store from '../store';
store.subscribe( () => {
    // console.log(store.getState() )
    localStorage.setItem('citas', JSON.stringify(store.getState() ));
})

class ListaCitas extends Component {
    
    componentDidMount(){
        this.props.getCitas();
    }
    
    render(){
        const citas = this.props.citas;

        //validar cuantas citas hay
        //console.log(Object.keys(citas).length)

        //hace la comparación de si hay citas o no
        const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus citas aquí';

        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-citas">
                       {Object.keys(this.props.citas).map(cita => (
                         <Cita 
                            key={cita}
                            info={this.props.citas[cita]}
                         />  
                       ))}
                    </div>
                </div>
            </div>
        );    
    }
}

ListaCitas.propTypes = {
    citas : PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    citas: state.citas.citas
})

export default connect(mapStateToProps, {getCitas }) (ListaCitas);