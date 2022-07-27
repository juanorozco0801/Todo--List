import { useState } from "react";
import { useRef } from "react"
import { useLayoutEffect } from "react"

export const Quote = ({quote, author}) => {

    const pRef = useRef();

    const [boxSize, setBoxSize] = useState({widht: 0, height: 0});

    useLayoutEffect(() => {

        const {height,width}= pRef.current.getBoundingClientRect();
        setBoxSize({height,width})
        
    
    }, [])



    return (


        <>
            <blockquote 
                className="blockquote text-end"
                style={{display:'flex'}}
            >
                <p ref={ pRef } className="mb-1">{quote}</p>
                <footer className="blockquote-footer mt-1"> {author}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>

            


    )
}
