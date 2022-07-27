import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Message } from './Message';


export const FormWithCustomHook = () => {


  const { username, password, email, formState, onInputChange, onResetForm } = useForm({   
      username : '',
      email : '',
      password : '',
  })

  // const {username, password, email} = formState



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



        <h1>Formulario con custon Hook</h1>
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
            placeholder='email' 
            name="email"
            value={ email }
            onChange = {onInputChange}
        />

        <input 
            type="password"
            className='form-control mt-2'
            placeholder='password' 
            name="password"
            value={ password }
            onChange = {onInputChange}
        />


        <button onClick={ onResetForm }  className='btn btn-primary mt-2'>BORRAR</button>
        

        {

          (username === 'strider2') && <Message/>

        }
    
    </>

  )
}
