import './App.css';
import Quiz from './components/Quiz/Quiz.jsx';
import Result from './components/Result/Result.jsx';
import './index.scss';
import {useState} from "react";

const questions = [
    {
        title: 'Из скольки таймов состоит встреча в баскетболе?',
        variants: ['двух таймов по 20 минут', 'четырех таймов по 10 минут', 'трех таймов по 15 минут'],
        correct: 1,
    },
    {
        title: 'Игрок нападающей команды не должен находиться в зоне под корзиной более ... с',
        variants: ['5', '4', '3'],
        correct: 2,
    },
    {
        title: 'Групповой отбор мяча используется чаще всего:',
        variants: [
            'при активнейшей защите и прессинге',
            'на половине площадки соперника',
            'при явном проигрыше команды',
        ],
        correct: 0,
    },
];

function App() {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);

    const question = questions[step];

    const onClickVariant = (index) => {
        setStep(step + 1);
        if(index === question.correct){
            setCorrect(correct + 1);
        }
    }

    return (
        <div className="App">
            {step !== questions.length ?
                <Quiz question={question}
                      onClickVariant={onClickVariant}
                      step={step}
                      questionsLen={questions.length}/>
                : <Result
                    correct={correct}
                    questionsLen={questions.length}
                />
            }

        </div>
    );
}

export default App;
