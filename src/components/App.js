import { useEffect, useState } from "react";

function App() {
const [rendered, setRendered] = useState(null)
    useEffect(() => {
         fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(randomDog => {
         setRendered(randomDog.message)
        })
    }, [])
    if (!rendered) {
       return <p>Loading...</p>
    }
    return <img src={rendered} alt="A Random Dog"/>
}
export default App