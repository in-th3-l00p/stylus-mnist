const API_URL = "http://127.0.0.1:5000";

export default async function predictInput(input: number[][]): Promise<number> {
    const response = await fetch(API_URL + "/predict", {
        method: "POST",
        body: JSON.stringify(input)
    })
    return (await response.json())["prediction"];
}