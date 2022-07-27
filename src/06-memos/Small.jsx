import {memo} from 'react'


export const Small = memo(({value}) => {

    console.log('me volvi a dibujar :(')


  return (
    
    <small>{ value }</small>

  )
})


//estando en CRA se puede hacer React.memo()
//al estar en vite es necesario import { memo }= from 'React'
