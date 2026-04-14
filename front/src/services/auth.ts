import {API_URL} from './api'

export async function registerUser(data: { name: string; email: string; password: string }) {
    const res = await fetch(`${API_URL}/auth/register` , {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    if(!res.ok) {
        throw new Error("Api problem");
    }
    return res.json();
}

export async function loginUser(data: { email: string; password: string }) {
    const res = await fetch(`${API_URL}/auth/login` , {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    if(!res.ok) {
        throw new Error("Api problem");
    }
    return res.json();
}