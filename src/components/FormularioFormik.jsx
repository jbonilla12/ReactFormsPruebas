import React from 'react'
import { Formik } from 'formik'

const FormularioFormik = () => {
  return (
    <Formik
        initialValues={{
            nombre: '',
            correo: ''
        }}
        validate={(valores)=>{
            if(!valores.nombre){
                console.log('Favor ingresa un nombre')
            }
        }}
        onSubmit={(valores)=>{
           console.log('Formulario enviado') 
           console.log('valores', valores)
        }}>
        {({values, handleSubmit, handleChange, handleBlur})=>(
            <form onSubmit={handleSubmit}>
                <h2>Nuevo</h2>
                <div>
                    <label htmlFor='nombre'>Nombre</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name='nombre' 
                        placeholder='Joshua Bonilla' 
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                </div>
                <div>
                    <label htmlFor='correo'>Correo</label>
                    <input 
                        type="email" 
                        id="correo" 
                        name='correo' 
                        placeholder='correo@coreeo.com' 
                        value={values.correo}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                </div>
                <button type='submit'>Enviar</button>
            </form>
        )}
    </Formik>
    
  )
}

export default FormularioFormik