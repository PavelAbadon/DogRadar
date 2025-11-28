// DayModal.jsx  (визуален макет, секцията за "други кучета" е включена но скрита)
export default function DayModalVisual({ day = 12, monthName = "Ноември", year = 2025 }) {
  return (
    <>
      {/* overlay */}
      <div className="modal-overlay"></div>

      {/* modal */}
      <div className="modal-window pixel-card">
        <div className="modal-header space-between">
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button className="month-btn">⟵</button>
            <div style={{ fontWeight: 900, fontSize: 18 }}>{day} {monthName} {year}</div>
          </div>
          <button className="month-btn">✕</button>
        </div>

        <div className="modal-body">
          {/* Сегменти сутрин/обед/следобед/вечер — тук показваме само кратък набор слотове */}
          <section className="day-section">
            <h4>Сутрин · 06:00 — 11:00</h4>

            <div className="slot-row">
              <div className="time-col">07:00–07:30</div>
              <div className="action-col">
                <button className="pixel-btn reserve-btn">Резервирай</button>
              </div>
            </div>

            <div className="slot-row">
              <div className="time-col">07:30–08:00</div>
              <div className="action-col">
                <button className="pixel-btn reserve-btn">Резервирай</button>
              </div>
            </div>

            <div className="slot-row">
              <div className="time-col">08:00–08:30</div>
              <div className="action-col">
                <button className="pixel-btn reserve-btn">Резервирай</button>
              </div>
            </div>
          </section>

          {/* --------
             Секцията с вече записаните/конфликтни кучета.
             По подразбиране е скрита чрез класа .hidden.
             Когато потребител натисне "Резервирай" — тази секция трябва да се покаже.
             -------- */}
          <section className="conflicts-section hidden">
            <h4>Други кучета, записани за този слот</h4>
            <ul className="conflict-list">
              <li><strong>Мария</strong> — Нерон (Pitbull) · 07:00–07:45</li>
              <li><strong>Иван</strong> — Ласи (Collie) · 07:15–08:00</li>
            </ul>

            <div className="small" style={{ marginTop: 8 }}>
              Може да изберете друг слот или да поканите собствениците да сменят часа.
            </div>
          </section>
        </div>

        <div className="modal-footer" style={{ marginTop: 12, display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <button className="pixel-btn">Затвори</button>
        </div>
      </div>
    </>
  );
}
