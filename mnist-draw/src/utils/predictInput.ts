const API_URL = "http://127.0.0.1:5000";

export default async function predictInput(input: number[][]): Promise<number> {
    for (let i = 0; i < input.length; i++)
        for (let j = 0; j < input[i].length; j++) {
            console.log(`test[${i}][${j}] = [${input[i][j]},0]`)
        }

    const response = await fetch(API_URL + "/predict", {
        method: "POST",
        body: JSON.stringify(input)
    })
    return (await response.json())["prediction"];
}