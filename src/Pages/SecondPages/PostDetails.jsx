import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_API_URI } from '../../baseUrl.js'
import { characters } from '../../Characters.jsx'
import placeHolder from '../../assets/harryPotterHome.jpg'

export default function Show() {

    const { id } = useParams()
    const [characters, setCharacters] = useState(null)

    useEffect(() => {
        axios.get(`${BASE_API_URI}/characters/${id}`)
            .then(res => {
                // console.log(res.characters);
                setCharacters(res.data.characters);
            })
            .catch(err => {
                console.error(err);
                setCharacters(null);
            });
    }, [id]);

    const navigate = useNavigate()

    return (
        <main>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <h1>Pagina con dettaglio personaggio {id}</h1>
            </div>
        </main>
    )
}