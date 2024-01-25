import { useState, createContext, useEffect } from 'react'

export const Context = createContext(null);

export function ContextProvider({ children }) {
    const [point, setPoint] = useState(0);
    const [answerCorrect, setAnswerCorrect] = useState(false);
    const [data, setData]=useState([]);

    function fetchApi() {
        fetch("https://quizapi.io/api/v1/questions?apiKey=uyBRG6yjQm64BroNT1sdubTBk3FW4S2xE89Rj0ab&limit=10")
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("data", JSON.stringify(data))
            }).finally(()=>{
                setData(JSON.parse(localStorage.getItem("data")));
            })
    }

    return (
        <Context.Provider value={{
            point,
            setPoint,
            fetchApi,
            answerCorrect,
            setAnswerCorrect,
            data
        }} >
            {children}
        </Context.Provider>
    )
}
