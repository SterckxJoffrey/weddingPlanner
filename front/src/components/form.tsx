
import { useState } from "react";
import type { FormEvent } from "react";
import { createGuest } from "../services/guest";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    max-width: 350px;
    margin: 2rem auto;
    padding: 2rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
`;

const StyledInput = styled.input`
    padding: 0.7rem 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    font-size: 1rem;
    &:focus {
        outline: none;
        border-color: #b48b31;
        box-shadow: 0 0 0 2px #f7e7b1;
    }
`;

const StyledButton = styled.button`
    background: #b48b31;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: #a07a28;
    }
`;

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
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <StyledInput
                type="number"
                placeholder="RSVP"
                value={rsvp}
                onChange={(e) => setRsvp(Number(e.target.value))}
            />
            <StyledInput
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />
            <StyledButton type="submit">Ajouter</StyledButton>
        </StyledForm>
    );
}