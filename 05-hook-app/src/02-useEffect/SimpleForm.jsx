import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'gsdesign',
        email: 'gomezgu31@gmail.com'
    })

    const { username, email} = formState;

    const onInputChange = ({ target }) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect( () => {
        
    }, [formState]);


  return (
    <>

        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="UserName"
            name="username"
            value={ username }
            onChange={ onInputChange }
        >
        </input>

        { (username === 'gsdesign') && <Message /> }

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="gomezgu31@gmail.com"
            name='email'
            value={ email }
            onChange={ onInputChange }
            >
        </input>

    </>
  )
}
