import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        
        username : 'strider',
        email : 'juan@google.com'
    })

    const { username, email } = formState;

    const onInputChange = ( {target} ) => {

        const {name, value} = target;

        setFormState({
            ...formState,
            [name]:value
        })

    }



    useEffect(() => {
      //console.log('useEffect Called!')
    
    },[])//un arreglo vacio quiere decir que se dispare solo una vez
    
    useEffect(() => {
        //console.log('username change!')
      
      },[username])//un arreglo vacio quiere decir que se dispare solo una vez

    useEffect(() => {
      //console.log('email change!')
    
    },[ email ])//un arreglo vacio quiere decir que se dispare solo una vez
     


  return (
    <>  



        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className='form-control'
            placeholder='Username' 
            name="username"
            value={ username }
            onChange = {onInputChange}
        />

        <input 
            type="text"
            className='form-control mt-2'
            placeholder='juan@google.com' 
            name="email"
            value={ email }
            onChange = {onInputChange}
        />

        

        {
          (username === 'strider2') && <Message/>

        }
    
    </>

  )
}
