export default function Calendar() {
    return (
   <>
  {/* Calendar - static visual (No logic) */}
  <main className="container">
    <div className="calendar-top">
      <button className="month-btn month-prev">⏪ Октомври</button>
      <h2 className="month-title">Ноември 2025</h2>
      <button className="month-btn month-next">Декември ⏩</button>
    </div>
    {/* Weekday headers */}
    <div className="calendar-weekdays" aria-hidden="true">
      <div>Пн</div>
      <div>Вт</div>
      <div>Ср</div>
      <div>Чт</div>
      <div>Пт</div>
      <div>Сб</div>
      <div>Нд</div>
    </div>
    {/* Grid: empty cells for offset + actual days */}
    <div className="calendar-grid visual-month">
      {/* пустите клетки (при нужда) */}
      <div className="calendar-cell empty" />
      <div className="calendar-cell empty" />
      <div className="calendar-cell empty" />
      {/* реалните дни на месеца (примерно за Ноември 2025) */}
      <div className="calendar-cell">
        <div className="day-num">1</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">2</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">3</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">4</div>
      </div>
      {/* продължаваш да напълваш до 30 */}
      {/* примерни редове: */}
      <div className="calendar-cell">
        <div className="day-num">5</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">6</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">7</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">8</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">9</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">10</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">11</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">12</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">13</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">14</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">15</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">16</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">17</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">18</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">19</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">20</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">21</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">22</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">23</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">24</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">25</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">26</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">27</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">28</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">29</div>
      </div>
      <div className="calendar-cell">
        <div className="day-num">30</div>
      </div>
      {/* ако месецът има 31 — допълваш */}
    </div>
  </main>
</>

  );
}
