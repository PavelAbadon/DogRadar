// Calendar.jsx
export default function Calendar() {
  const monthNames = ["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"];
  const weekDays = ["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];

  const currentYear = 2025;
  const currentMonth = 10; // Ноември (0-indexed)
  const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // 0=Неделя
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const calendarDays = Array.from({ length: startOffset + daysInMonth }, (_, i) => {
    if(i < startOffset) return null;
    return i - startOffset + 1;
  });

  // Примерни "икони" за предходен и следващ месец (можеш да замениш с изображения)
  const prevMonth = monthNames[(currentMonth + 11) % 12];
  const nextMonth = monthNames[(currentMonth + 1) % 12];

  return (
    <main className="container">
      <div className="calendar-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
        <button className="pixel-btn" style={{ fontWeight: "bold" }}>⏪ {prevMonth}</button>
        <h2 style={{ fontSize: 32 }}>{monthNames[currentMonth]} {currentYear}</h2>
        <button className="pixel-btn" style={{ fontWeight: "bold" }}>{nextMonth} ⏩</button>
      </div>

      {/* Дни на седмицата */}
      <div className="calendar-weekdays" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginTop: 12 }}>
        {weekDays.map(day => (
          <div key={day} style={{ fontWeight:"bold", textAlign:"center", fontSize: 18 }}>{day}</div>
        ))}
      </div>

      {/* Дни от месеца */}
      <div className="calendar-grid" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8, marginTop: 8 }}>
        {calendarDays.map((day, idx) => (
          <div
            key={idx}
            className="calendar-day pixel-card"
            style={{
              padding: 12,
              border: "3px solid red",
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              color: day ? "red" : "#999",
              minHeight: 120,
              background: day === null ? "#f0f0f0" : "#fff"
            }}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </main>
  );
}
