import { useEffect, useState } from "react"
import DogCard from "./dogCard/DogCard";

export default function Gallery() {
    const[dogs, setDogs] = useState([]);

    useEffect(() =>{
        (async ()=>{
            const response = await fetch('http://localhost:3030/data/dogs');
            const result = await response.json();
            setDogs(Object.values(result));
        })();
    },[]);

    return (
        <main className="container">
            <h2 style={{ marginTop: 16 }}>Кучета</h2>
            <div className="gallery-grid">
                {/* repeat card for each dog (placeholder) */}
                {dogs.map(dog => <DogCard key={dog._id} {...dog}/>)}
                
                {/* add more cards */}
            </div>
        </main>

    )
}