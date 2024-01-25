import { useContext, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Context } from "../../contexts/CotextProvider";
import { Answer } from "../../components/answer/Answer";

import styles from './quiz.module.css';
export function Quiz() {

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams({ 'active': 'Z' });
    const active = searchParams.get('active');

    const [next, setNext] = useState(0);

    const {
        point,
        setPoint,
        setAnswerCorrect,
        answerCorrect
    } = useContext(Context);

    const data = JSON.parse(localStorage.getItem('data'));


    //adicona um ponto se a resposta enviar for correta
    function veirfyQuestionIsCorrect() {
        if (answerCorrect == true) {
            setPoint(point + 1);
        }
    }

    //incrementa a proxima questão
    function nextQuestion() {
        //primeiro verifica se a respota esta correta
        veirfyQuestionIsCorrect();
        //depois pula p/ a prox questao
        if (next === 9) {
            setNext(0);
            //zera a contagem de pontos
        } else {
            setNext(next + 1);
        }
        //limpando o estado da resposta anterior
        setAnswerCorrect(false);

        //retira a seleção da respota selecionada anteriormente
        setSearchParams({ 'active': 'Z' })
    }

    return (
        <div className={styles.quiz}>
            <div className={styles.question}>
                <div>
                    <span>Questao {next + 1} de 10</span>
                    <p>{data[next].question}</p>
                </div>
                <div className={styles.progress}>
                    <div style={{
                        width:`${next+1}0%`,
                    }}></div>
                </div>
            </div>
            <div className={styles.answers}>
                <Answer
                    active='A'
                    setSearchParams={() => setSearchParams({ 'active': 'A' })}
                    answer={data[next].answers.answer_a}
                    correct={data[next].correct_answers.answer_a_correct}

                />
                <Answer
                    active='B'
                    setSearchParams={() => setSearchParams({ 'active': 'B' })}
                    answer={data[next].answers.answer_b}
                    correct={data[next].correct_answers.answer_b_correct}
                />
                <Answer
                    active='C'
                    setSearchParams={() => setSearchParams({ 'active': 'C' })}
                    answer={data[next].answers.answer_c}
                    correct={data[next].correct_answers.answer_c_correct}
                />
                <Answer
                    active='D'
                    setSearchParams={() => setSearchParams({ 'active': 'D' })}
                    answer={data[next].answers.answer_d}
                    correct={data[next].correct_answers.answer_d_correct}
                />
                <button
                    onClick={()=>{
                        nextQuestion()
                        if(next === 9){
                            navigate('/score')
                        }
                    }}
                    className={styles.btn}
                    style={
                        { pointerEvents: active === 'Z' ? "none" : "" }
                    }
                >Enviar respotar</button>
            </div>

        </div>
    )
}