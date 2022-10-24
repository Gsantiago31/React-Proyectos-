import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {

   const {formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: '',
   });

//    const {username, email, password} = formState;

  return (
    <>

        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="usuario"
            name="username"
            value={ username }
            onChange={ onInputChange }
        >
        </input>

        {/* { (username === 'gsdesign') && <Message /> } */}

        <input 
            type="text"
            className="form-control mt-2"
            placeholder="Correo"
            name="email"
            value={ email }
            onChange={ onInputChange }
        >
        </input>
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name='password'
            value={ password }
            onChange={ onInputChange }
            >
        </input>

        <button className='btn btn-primary mt-2' onClick={ onResetForm }>Borrar</button>

    </>
  )
}
