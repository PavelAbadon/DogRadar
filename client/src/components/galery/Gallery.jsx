export default function Gallery(){
    return(
        <main className="container">
  <h2 style={{ marginTop: 16 }}>Кучета</h2>
  <div className="gallery-grid">
    {/* repeat card for each dog (placeholder) */}
    <div className="card pixel-card">
      <div className="avatar">🐶</div>
      <div className="title">Рой</div>
      <div className="meta">Labrador · medium</div>
      <div className="small">Собственик: Павел</div>
      <div style={{ marginTop: 8 }}>
        <a className="pixel-btn" href="details.html">
          Детайли
        </a>
      </div>
    </div>
    <div className="card pixel-card">
      <div className="avatar">🐾</div>
      <div className="title">Нерон</div>
      <div className="meta">Pitbull · large</div>
      <div className="small">Собственик: Мария</div>
      <div style={{ marginTop: 8 }}>
        <a className="pixel-btn" href="details.html">
          Детайли
        </a>
      </div>
    </div>
    {/* add more cards */}
  </div>
</main>

    )
}