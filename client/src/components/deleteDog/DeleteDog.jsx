import { useNavigate, useParams } from "react-router";

export default function DeleteDog() {
    const { dogId } = useParams();
    const navigate = useNavigate()

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

    return (
        <main className="container">
            <div className="pixel-card" style={{ padding: 18, marginTop: 18 }}>
                <h3>Изтриване на куче</h3>
                <p className="small">
                    Сигурни ли сте, че искате да изтриете Рой? Тази операция не може да бъде
                    отменена.
                </p>
                <div className="actions" style={{ marginTop: 12 }}>
                    <button className="pixel-btn" style={{ background: "#ffefef", borderColor: "#d44" }} onClick={deleteDogHandler} >
                        Изтрий
                    </button>
                    <a
                        className="pixel-btn"
                        href="details.html"
                        style={{ background: "#f6f6f2" }}
                    >
                        Откажи
                    </a>
                </div>
            </div>
        </main>

    );
}