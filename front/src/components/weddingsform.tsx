
import { useState } from "react";
import type { FormEvent } from "react";
import { createWeddings } from "../services/weddings";
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
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput type="text" 
            placeholder="Nom du mariage" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />
            <StyledInput type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
            <StyledInput type="text" 
            placeholder="Lieu" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
            />
            <StyledButton type="submit">Ajouter</StyledButton>
        </StyledForm>
    )
}