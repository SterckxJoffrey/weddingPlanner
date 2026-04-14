import { useState } from "react";
import type { FormEvent } from "react";
import { createWeddings } from "../services/weddings";


export default function Weddingsform(){
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = {
            name,
            date,
            location
        }
        try {
            await createWeddings(data)
            console.log("Mariage Créée")
        } catch {
            console.log("Porblème")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Nom du mariage" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />
            <input type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
            <input type="text" 
            placeholder="Lieu" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit">Ajouter</button>
        </form>
    )
}