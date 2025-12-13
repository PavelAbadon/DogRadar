import { useEffect, useState } from "react";
import { useParams } from "react-router";
import request from "../../utils/request";

export default function EditDog() {
    const initiualValue = {
        name:'',
        breed:'',
        age:'',
        gender:'',
        size:'',
        imageUrl:'',
        description:''
    }

    const {dogId} = useParams();
    const [value, setValue] = useState(initiualValue);
    
    const changeHandler = (e) => {
    setValue(state => ({
        ...state,
        [e.target.name]: e.target.value
    }));
    };
    useEffect(() =>{
        request(`http://localhost:3030/data/dogs/${dogId}`)
        .then(result =>{
            setValue(result)
        })
        .catch(err =>{
            alert(err.message)
        })
    },[dogId]);

    return (
        <main className="container">
            <h2 style={{ marginTop: 16 }}>Редактирай куче</h2>

            <div className="form" style={{ maxWidth: 600, marginTop: 12 }}>
                <form action="#" method="post">

                    {/* Име */}
                    <label htmlFor="dog-name">Име</label>
                    <input
                        id="dog-name"
                        name="name"
                        type="text"
                        value={value.name}
                        required
                        onChange={changeHandler}
                    />

                    {/* Порода */}
                    <label htmlFor="dog-breed">Порода</label>
                    <input
                        id="dog-breed"
                        name="breed"
                        type="text"
                        value={value.breed}
                        required
                        onChange={changeHandler}
                    />

                    {/* Възраст */}
                    <label htmlFor="dog-age">Възраст</label>
                    <input
                        id="dog-age"
                        name="age"
                        type="number"
                        min="0"
                        value={value.age}
                        required
                        onChange={changeHandler}
                    />

                    {/* Пол */}
                    <label htmlFor="dog-gender">Пол</label>
                    <select id="dog-gender" name="gender" required value={value.gender} onChange={changeHandler}>
                        <option value="male">Мъжко</option>
                        <option value="female">Женско</option>
                        
                    </select>

                    {/* Размер */}
                    <label htmlFor="dog-size">Размер</label>
                    <select id="dog-size" name="size" required value={value.size} onChange={changeHandler}>
                        <option value="small">Small (30 мин)</option>
                        <option value="medium">Medium (60 мин)</option>
                        <option value="large">Large (90 мин)</option>
                        
                    </select>

                    {/* URL на снимка */}
                    <label htmlFor="dog-photo-url">URL на снимката</label>
                    <input
                        id="dog-photo-url"
                        name="imageUrl"
                        type="url"
                        placeholder="https://example.com/dog.jpg"
                        value={value.imageUrl}
                        onChange={changeHandler}
                    />

                    {/* Бележки */}
                    <label htmlFor="description">Бележки</label>
                    <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={value.description}
                        onChange={changeHandler}
                    />

                    {/* Бутони */}
                    <div className="actions">
                        <button className="pixel-btn" type="submit">
                            Запази
                        </button>

                        {/* TODO: Да стане Link към details */}
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
