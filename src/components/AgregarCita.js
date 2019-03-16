import React, {Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

//Redux

import {connect} from 'react-redux';
import { addCita } from '../actions/citasActions';
import { mostrarError } from '../actions/errorActions';

class AgregarCita extends Component{

    componentWillMount() {
        this.props.mostrarError(false)
    }

    //declarando las refs
    nombreRef =  React.createRef();
    apellidoRef =  React.createRef();
    edadRef =  React.createRef();
    sintomaRef =  React.createRef();

    //evento para crear nueva cita
    crearNuevaCita = (e) => {
        e.preventDefault();


        const nombre = this.nombreRef.current.value,
              apellido = this.apellidoRef.current.value,
              edad= this.edadRef.current.value,
              sintoma = this.sintomaRef.current.value;  

              //cuando está vacío va a mostrar error
              if(nombre === '' || apellido === '' || edad === '' || sintoma === ''){
                //   console.log("flatan campos")
                this.props.mostrarError(true);
              } else {
                const nuevaCita ={
                    id: uuid(),
                    nombre,
                    apellido,
                    edad,
                    sintoma
                } 
              
                
                    // se envía el objeto hacia  el padre para actualizar el state
                    this.props.addCita(nuevaCita);

                    //reiniciar el formulario
                    e.currentTarget.reset();

                    //Elimine el error
                    this.props.mostrarError(false);
                }
    }

    render(){
        const existeError = this.props.error;
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                    Agrega las citas aquí
                    </h2>
                     <form onSubmit={this.crearNuevaCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.nombreRef} type="text" className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Apellido</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.apellidoRef} type="text" className="form-control"  placeholder="" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Edad</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref={this.edadRef} type="number" className="form-control" />
                            </div>                            
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Síntoma</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref={this.sintomaRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                     </form>
                     { existeError ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}
                </div>
            </div>
        );
    }

}

AgregarCita.propTypes = {
    addCita : PropTypes.func.isRequired
}

const mapStateToProps = state => ({ 
    citas: state.citas.citas,
    error: state.error.error
})
export default connect(mapStateToProps, {addCita, mostrarError}) (AgregarCita);