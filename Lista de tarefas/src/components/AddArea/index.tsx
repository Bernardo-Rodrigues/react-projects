import {useState, KeyboardEvent} from 'react';
import * as C from './styles'

type Props = {
    onEnter: (taskName: string, taskNumber: number) => void
}

export const AddArea = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('');
    const [inputNumber, setInputNumber] = useState(1);
    
    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText, inputNumber);
            setInputNumber(1);
            setInputText('');
        }
    }

    return(
        <C.Container>
            <div className="image">➕</div>
            <div className="inputs">
                <input 
                    className="text"
                    type="text"
                    placeholder="Adicione uma tarefa"
                    value={inputText}
                    onChange={e=> setInputText(e.target.value)}
                    onKeyUp={handleKeyUp}
                />
                <label>Importância</label>
                <input
                    className="number"
                    type="number"
                    placeholder="Importância"
                    min="1"
                    max="5"
                    value={inputNumber}
                    onChange={e => setInputNumber(e.target.valueAsNumber)}
                    onKeyUp={handleKeyUp}
                />
            </div>
        </C.Container>
    );
}