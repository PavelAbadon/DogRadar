export default function EditDog() {
    return (
        <main className="container">
            <h2 style={{ marginTop: 16 }}>Редактирай куче</h2>
            <div className="form" style={{ maxWidth: 600, marginTop: 12 }}>
                <form action="#" method="post">
                    <label htmlFor="dog-name">Име</label>
                    <input
                        id="dog-name"
                        name="name"
                        type="text"
                        defaultValue="Рой"
                        required=""
                    />
                    <label htmlFor="dog-breed">Порода</label>
                    <input
                        id="dog-breed"
                        name="breed"
                        type="text"
                        defaultValue="Labrador"
                        required=""
                    />
                    <label htmlFor="dog-photo-url">URL на снимката</label>
                    <input
                        id="dog-photo-url"
                        name="imageUrl"
                        type="url"
                        placeholder="https://example.com/dog.jpg"
                        defaultValue="https://example.com/roy.jpg"
                    />

                    <label htmlFor="dog-size">Размер</label>
                    <select id="dog-size" name="size" required="">
                        <option value="small">Small (30 мин)</option>
                        <option value="medium" selected="">
                            Medium (60 мин)
                        </option>
                        <option value="large">Large (90 min)</option>
                    </select>
                    <label htmlFor="dog-notes">Бележки</label>
                    <textarea
                        id="dog-notes"
                        name="notes"
                        rows={3}
                        defaultValue={"Обича плуване"}
                    />
                    <div className="actions">
                        <button className="pixel-btn" type="submit">
                            Запази
                        </button>
                        <a
                            className="pixel-btn"
                            href="details.html"
                            style={{ background: "#f6f6f2" }}
                        >
                            Отказ
                        </a>
                    </div>
                </form>
            </div>
        </main>

    );
}