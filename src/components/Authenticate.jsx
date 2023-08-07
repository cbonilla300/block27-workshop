import { useState } from "react"

const authenticated = ({token}) =>  {
    const [sucessMessage, setSuccessMessage] = useState(null);
    const [Error, setError] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/signup" ,
                 {
                   method: "GET",
                   headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${token}`,
                   }   
                  }
               );
               const result = await response.json();
               setToken(result.token)
               setSuccessMessage(result.message);
        }catch (error){
            setError(error.message)
        }
    }
    return(
        <div>
        <h2>Authenticate!</h2>
        {sucessMessage && <p>{sucessMessage}</p>}
        {Error && <p>{Error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>  
        </div>
        
    );
}

export default authenticated;