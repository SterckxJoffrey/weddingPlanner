import {API_URL} from './api'

export async function createGuest(data : any) {
    const res = await fetch(`${API_URL}/guests` , {
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