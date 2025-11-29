export default function DogCard({
    _id,
    name,
    breed,
    age,
    imageUrl,
    gender
}) {
    return (
        <div className="card pixel-card">
            <div className="avatar">🐾</div>
            <div className="title">{name}</div>
            <div className="meta">порода: {breed}</div>
            <div className="meta">години: {age} </div>
            <div className="meta">пол: {gender} </div>
            <div className="small">Собственик: Мария</div>
            <div style={{ marginTop: 8 }}>
                <a className="pixel-btn" href="details.html">
                    Детайли
                </a>
            </div>
        </div>
    )
}