import { useState } from "react";

function InputCreate () {
    const [title,setTitle]=  useState('')
    const [err,setErr] = useState(null)
    const [res, setRes] = useState('')
    const payload = {title}

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setRes('')
        const urlApiCreate = 'http://localhost:3000/create'

        try {
            const response = await fetch(urlApi, {
                method: 'POST', // Método HTTP
                headers: {
                  'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                },
                body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
              })
              if(response.ok){
                const data = await response.json()
                setRes(data.title)
                setTitle('')

              }
            
        } catch (error) {
            console.log(error)
            
        }
        


    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e)=>(e.target.value)} placeholder="write a task" required />
            <button type="submit">Add task</button>
        </form>
        <h2>Se envio la tarea: {res}</h2>
        </>
    )
}