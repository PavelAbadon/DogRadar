export default function DeteleDog() {
    return (
        <main className="container">
            <div className="pixel-card" style={{ padding: 18, marginTop: 18 }}>
                <h3>Изтриване на куче</h3>
                <p className="small">
                    Сигурни ли сте, че искате да изтриете Рой? Тази операция не може да бъде
                    отменена.
                </p>
                <div className="actions" style={{ marginTop: 12 }}>
                    <button
                        className="pixel-btn"
                        style={{ background: "#ffefef", borderColor: "#d44" }}
                    >
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