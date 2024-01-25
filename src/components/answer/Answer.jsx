import { useSearchParams } from 'react-router-dom';

import styles from './answer.module.css';
import { useContext } from 'react';
import { Context } from '../../contexts/CotextProvider';

export function Answer({ active, setSearchParams,answer, correct }) {
    const [searchParams] = useSearchParams();
    const answerActive = searchParams.get('active');
    const {setAnswerCorrect, answerCorrect} = useContext(Context)
   
    

    return (
        <div
            onClick={()=>{
                setSearchParams();
                if(correct === 'true'){
                    setAnswerCorrect(true);
                }else{
                    setAnswerCorrect(false);
                }
            }}
            className={styles.answer}
            style={{
                background: active == answerActive ? "aliceblue" : ""
            }}
        >
            <span
                className={styles.box}
                style={{
                    backgroundColor: active == answerActive ? "rgb(69, 66, 120)" : "",
                    color: active == answerActive ? "#FFF" : "",
                }}
            >{active}</span>
            
            <p
                style={{
                    color: active == answerActive ? "rgb(69, 66, 120)" : "",
                }}
            >{answer}</p>
        </div>
    )
}