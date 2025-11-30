import { useEffect, useState } from "react"
import DogCard from "../galery/dogCard/DogCard";

export default function Home() {
    const[selectedDogs, setSelectedDogs] = useState([]);


    useEffect(() =>{
        (async ()=>{
            const response = await fetch('http://localhost:3030/data/dogs');
            const result = await response.json();
            const arr = Object.values(result || []);
            //Сортиране по име, Защото не открих начин да ги сортирам по красота :)
            arr.sort((a, b) =>
                (a.name || "").localeCompare(b.name || "", "bg", { sensitivity: "base" })
            );
            const top3 = arr.slice(0, 3);
            setSelectedDogs(top3);
            
        })();
    },[]);
    return (
        <main className="container">
            <section className="hero">
                <div className="text">
                    <h2>Добре дошъл в Dog Radar</h2>
                    <p>
                        Планирай разходките на твоето куче, покани приятели и получавай
                        предупреждения, когато "врагове" са планирани на същото място.
                    </p>
                    <div style={{ marginTop: 12 }}>
                        <a className="pixel-btn" href="create-dog.html">
                            Добави куче
                        </a>
                        <a
                            className="pixel-btn"
                            href="gallery.html"
                            style={{ marginLeft: 8 }}
                        >
                            Виж галерия
                        </a>
                    </div>
                </div>
                <div style={{ width: 320 }}>
                    {/* Hero cards (scrollable, simple) */}
                    <div style={{ display: "flex", gap: 8, overflowX: "auto" }}>
                        {selectedDogs.map(selectedDogs => <DogCard key={selectedDogs._id} {...selectedDogs}/>)}
                       
                    </div>
                </div>
            </section>
            <section style={{ marginTop: 18 }}>
                <h3>Как работи</h3>
                <ul className="small">
                    <li>Добавяш своето куче в системата.</li>
                    <li>
                        Планираш разходка — системата автоматично смята крайния час според
                        размера на кучето.
                    </li>
                    <li>
                        Ако има „враг“ на същата локация и припокриване повече от 30 мин —
                        получаваш предупреждение.
                    </li>
                </ul>
            </section>
        </main>
    );
}