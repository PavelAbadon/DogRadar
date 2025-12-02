import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Details() {

    const { dogId } = useParams();
    const [dog, setDog] = useState({});
    useEffect(() =>{
        (async ()=>{
            const response = await fetch(`http://localhost:3030/data/dogs/${dogId}`);
            const result = await response.json();
            setDog(result);
            
        })();
    },[dogId]);
    

    

    return (
        <main className="container">
            <div className="pixel-card details-card" style={{ padding: 16, marginTop: 18 }}>
                {/* Снимка */}
                <div className="details-image-wrap">
                    <img className="details-image" src={dog.imageUrl} alt={dog.name} />
                </div>

                {/* Заглавна част */}
                <div className="space-between">
                    <div>
                        <div className="dog-name">{dog.name}</div>
                        <div className="small">{dog.breed} · {dog.gender} · {dog.age} години.</div>
                    </div>

                    <div className="flex">
                        <Link className="pixel-btn" to="edit-dog.html">Edit</Link>
                        <Link className="pixel-btn" to={`/dogs/${dogId}/delete`}>Delete</Link>
                    </div>
                </div>

                {/* Информация */}
                <section style={{ marginTop: 14 }}>
                    <h4>Информация</h4>
                    <p className="small">Бележки: {dog.description}</p>
                </section>

                {/* Закоментирано за момента */}
                {/*
        <section style={{ marginTop: 12 }}>
          <h4>Предстоящи разходки</h4>
          <ul className="small">
            <li>2025-11-30 · Южен парк · 18:00–19:00</li>
            <li>2025-12-02 · Борисова градина · 09:30–10:00</li>
          </ul>
        </section>
        */}
            </div>
        </main>
    );
}
