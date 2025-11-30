export default function CreateDog() {
    return (
        <main className="container">
            <h2 style={{ marginTop: 16 }}>Добави куче</h2>

            <div className="form" style={{ maxWidth: 600, marginTop: 12 }}>
                <form action="#" method="post">
                    
                    <label htmlFor="dog-name">Име</label>
                    <input id="dog-name" name="name" type="text" required />

                    <label htmlFor="dog-breed">Порода</label>
                    <input id="dog-breed" name="breed" type="text" required />

                    <label htmlFor="dog-size">Размер</label>
                    <select id="dog-size" name="size" required>
                        <option value="small">Small (30 мин)</option>
                        <option value="medium">Medium (60 мин)</option>
                        <option value="large">Large (90 мин)</option>
                    </select>

                    <label htmlFor="dog-photo-url">URL на снимката</label>
                    <input
                        id="dog-photo-url"
                        name="imageUrl"
                        type="url"
                        placeholder="https://example.com/dog.jpg"
                    />

                    <label htmlFor="dog-notes">Бележки</label>
                    <textarea id="dog-notes" name="notes" rows={3} />

                    <div className="actions">
                        <button className="pixel-btn" type="submit">
                            Запази
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
