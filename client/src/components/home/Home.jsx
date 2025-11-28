export default function Home() {
    return (
        <main className="container">
            <section className="hero">
                <div className="text">
                    <h2>Добре дошъл в MyDogCalendar</h2>
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
                        <div className="card pixel-card" style={{ minWidth: 220 }}>
                            <div className="avatar">🐶</div>
                            <div className="title">Рой</div>
                            <div className="meta">Labrador · medium</div>
                            <a className="pixel-btn" href="details.html">
                                Детайли
                            </a>
                        </div>
                        <div className="card pixel-card" style={{ minWidth: 220 }}>
                            <div className="avatar">🐕</div>
                            <div className="title">Лулу</div>
                            <div className="meta">Yorkie · small</div>
                            <a className="pixel-btn" href="details.html">
                                Детайли
                            </a>
                        </div>
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