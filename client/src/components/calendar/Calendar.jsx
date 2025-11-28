export default function Calendar(){
    return(
        <main className="container">
  <h2 style={{ marginTop: 16 }}>Календар</h2>
  <div className="pixel-card" style={{ padding: 12, marginTop: 8 }}>
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <div>
        <label htmlFor="date">Дата</label>
        <input id="date" type="date" defaultValue="" />
      </div>
      <div>
        <label htmlFor="select-dog">Куче</label>
        <select id="select-dog">
          <option>Рой</option>
          <option>Лулу</option>
        </select>
      </div>
      <div>
        <label htmlFor="select-loc">Локация</label>
        <select id="select-loc">
          <option>Южен парк</option>
          <option>Борисова градина</option>
        </select>
      </div>
    </div>
    <div className="calendar-grid" style={{ marginTop: 12 }}>
      <div>
        {/* times column */}
        <div className="time-cell">07:00</div>
        <div className="time-cell">07:30</div>
        <div className="time-cell">08:00</div>
        <div className="time-cell">08:30</div>
        <div className="time-cell">09:00</div>
        {/* ... continue */}
      </div>
      <div>
        {/* slots area */}
        <div className="slot-row">
          <div className="small">—</div>
        </div>
        <div className="slot-row">
          <div className="small">—</div>
        </div>
        <div className="slot-row">
          <div className="small">Рой (07:30–08:30)</div>
        </div>
        <div className="slot-row">
          <div className="small">—</div>
        </div>
        <div className="slot-row">
          <div className="small">—</div>
        </div>
      </div>
    </div>
  </div>
</main>

    )
}