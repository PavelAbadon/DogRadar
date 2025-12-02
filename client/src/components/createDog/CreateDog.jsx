import request from "../../utils/request";

export default function CreateDog() {
    const createNewDogHandler = async(event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const dogData = Object.fromEntries(formData);
        dogData.age = Number(dogData.age);
        //console.log(dogData);

        const result = await request('http://localhost:3030/data/dogs', 'POST', dogData)

        //todo пак голямо тоду, не работи ауторизацията ще трябва да го оправим
            
    }
    return (
        <main className="container">
            <h2 style={{ marginTop: 16 }}>Добави куче</h2>

            <div className="form" style={{ maxWidth: 600, marginTop: 12 }}>
                <form action="#" method="post" onSubmit={createNewDogHandler}>

                    <label htmlFor="dog-name">Име</label>
                    <input id="dog-name" name="name" type="text" required />

                    <label htmlFor="dog-breed">Порода</label>
                    <input id="dog-breed" name="breed" type="text" required />

                    <label>Пол</label>
                    <label><input type="radio" name="gender" value="male" required /> Мъжко</label>
                    <label><input type="radio" name="gender" value="female" required /> Женско</label>

                    <label htmlFor="dog-age">Години</label>
                    <input id="dog-age" name="age" type="number" required />

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
                    <textarea id="dog-notes" name="description" rows={3} />

                    <label htmlFor="dog-enemies">Врагове (ID-та, разделени със запетая""Тук още не сме направили функционалноста")</label>
                    <input
                        id="dog-enemies"
                        name="enemies"
                        type="text"
                        placeholder="id1, id2, id3"
                    />


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
