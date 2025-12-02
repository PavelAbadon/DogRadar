import { useNavigate, useParams, } from "react-router";
import { useEffect, useState } from "react";

export default function DeleteDog() {
    const { dogId } = useParams();
    const navigate = useNavigate();
    const [dog, setDog] = useState({});

       useEffect(() =>{
           (async ()=>{
               const response = await fetch(`http://localhost:3030/data/dogs/${dogId}`);
               const result = await response.json();
               setDog(result);
               
           })();
       },[dogId]);

    const deleteDogHandler = async () => {
        try {
            await fetch(`http://localhost:3030/data/dogs/${dogId}`, {
            method: 'DELETE'
        });
        navigate('/dogs')
        } catch (err) {
           alert('Нещо не се получава да изтрием :( ', err.message); 
        }        

    }
    //TODO ГОЛЯМО туду нямаме аутотентикация все още и не работи deleteDogHandler. 
    // Това ще трябва да се оправи като получим токен защото триенето на куче не работи за момента искам да видя дали поне бутона за отказ работи

    return (
        <main className="container">
            <div className="pixel-card" style={{ padding: 18, marginTop: 18 }}>
                <h3>Изтриване на куче</h3>
                <p className="small">`Сигурни ли сте, че искате да изтриете {dog.name}? Тази операция не може да бъде отменена.`</p>
                <div className="actions" style={{ marginTop: 12 }}>
                    <button className="pixel-btn" style={{ background: "#ffefef", borderColor: "#d44" }} onClick={deleteDogHandler} >
                        Изтрий
                    </button>
                    <button className="pixel-btn"  onClick={() => navigate(`/dogs/${dogId}/details`)} style={{ background: "#f6f6f2" }} >
                        Откажи
                    </button>
                </div>
            </div>
        </main>

    );
}