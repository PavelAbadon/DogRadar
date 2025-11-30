// Details.jsx
export default function Details() {

  // временно; по-късно ще идва от бекенда / props
  const imageUrl = "https://images.pexels.com/photos/28945723/pexels-photo-28945723.jpeg?_gl=1*yilf93*_ga*MTU2MjIwOTE1NC4xNzY0NDkxNTcw*_ga_8JE65Q40S6*czE3NjQ0OTE1NjkkbzEkZzEkdDE3NjQ0OTY4MjgkajM5JGwwJGgw";

  return (
    <main className="container">
      <div className="pixel-card details-card" style={{ padding: 16, marginTop: 18 }}>
        {/* Снимка */}
        <div className="details-image-wrap">
          <img className="details-image" src={imageUrl} alt="Снимка на кучето" />
        </div>

        {/* Заглавна част */}
        <div className="space-between">
          <div>
            <div className="dog-name">Рой</div>
            <div className="small">Labrador · medium · 6 год.</div>
          </div>

          <div className="flex">
            <a className="pixel-btn" href="edit-dog.html">Edit</a>
            <a className="pixel-btn" href="delete-dog.html">Delete</a>
          </div>
        </div>

        {/* Информация */}
        <section style={{ marginTop: 14 }}>
          <h4>Информация</h4>
          <p className="small">Бележки: Рой обича дълги разходки и плуване.</p>
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
