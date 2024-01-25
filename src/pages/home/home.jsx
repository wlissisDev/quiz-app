import { Link } from "react-router-dom"
export function Home(){
    return (
        <div>
            
        <h1>Bem vindo ao QUIZ</h1>
        <Link to={'/quiz'} >Iniciar</Link>
        </div>
    )
}