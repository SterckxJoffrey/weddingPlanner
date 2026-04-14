import { API_URL } from "./api";

export async function createWeddings(data : any) {
    const res = await fetch(`${API_URL}/weddings`, {
        method : "POST",
        headers :  {
        "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    if (!res.ok) {
        throw new Error("APi pas ouf")
    }
    return res.json()
    
}