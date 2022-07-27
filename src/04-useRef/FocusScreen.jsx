import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();


    //forma de enfocarse en un input con javascript
    const onClick = () => {

        // document.querySelector('input').select();
        inputRef.current.select();
        
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef }
            type="text" 
            className="form-control"
            placeholder="Ingrese nombre"
        />

        <button 
            onClick={ onClick }
            className="btn btn-primary mt-2">
            Set focus
        </button>
    
    
    
    </>
  )
}
