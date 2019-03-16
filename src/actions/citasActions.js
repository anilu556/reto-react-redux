import { MOSTRAR_CITAS, BORRAR_CITA, AGREGAR_CITA } from './types';

export const getCitas = () => {
    return {   
        type: MOSTRAR_CITAS
    }
}

export const addCita = (cita) => { 
    return {
        type: AGREGAR_CITA,
        payload: cita
    }
}

export const borrarCita = (id) => {
    return {
        type: BORRAR_CITA,
        payload: id
    }
}