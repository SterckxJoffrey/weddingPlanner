import { useState } from "react";
import type { FormEvent } from "react";
import { createGuest } from "../services/guest";

export default function Form() {
    const [name, setName] = useState("");
    const [rsvp, setRsvp] = useState(0);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            name,
            rsvp,
            status
        };

        try {
            await createGuest(data);
            console.log("Guest créé !");
        } catch (error) {
            console.error("Erreur :", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />



            <input
                type="number"
                placeholder="RSVP"
                value={rsvp}
                onChange={(e) => setRsvp(Number(e.target.value))}
            />

            <input
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />

            <button type="submit">Ajouter</button>
        </form>
    );
}