import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../contexts/CotextProvider";
import styles from './score.module.css';
export function Score() {

    const navigate = useNavigate();
    const {point, fetchApi,setPoint} = useContext(Context);

    return (
        <div className={styles.container}>
            {/* <h1>Point: {point}</h1>
            <Link to={`/`}>Quiz</Link>
            <button onClick={fetchApi}>chama api</button> */}
            <div className={styles.info}>
                <h2>Voce completou o Quiz</h2>
                <h1>Essa é sua pontuação...</h1>
            </div>
            <div className={styles.point}>
                <div>
                    {point}
                </div>
                <button 
                onClick={()=>{
                    setPoint(0);
                    fetchApi();
                    navigate('/')
                }}

                className={styles.btn}>Jogar novamente</button>
            </div>
        </div>
    )
}