import { API_URL } from "./api";

export async function createWeddings(data : any) {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/weddings`, {
        method : "POST",
        headers :  {
            "Content-Type" : "application/json",
            ...(token ? { "Authorization": `Bearer ${token}` } : {})
        },
        body : JSON.stringify(data)
    })
    if (!res.ok) {
        throw new Error("APi pas ouf")
    }
    return res.json()
}
export async function getWeddings() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/weddings`, {
        headers: {
            ...(token ? { "Authorization": `Bearer ${token}` } : {})
        }
    });
    if (!res.ok) {
        throw new Error("Erreur lors de la récupération des mariages");
    }
    return res.json();
}