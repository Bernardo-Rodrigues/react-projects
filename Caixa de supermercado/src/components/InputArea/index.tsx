import { useState } from 'react';
import * as C from './styles';

type Props = {
    onAddSell: (estado: boolean) => void;
    onAddTaken: (estado: boolean) => void;
    area: number;
}

export const InputArea = ({ onAddSell, onAddTaken, area }: Props) => {
    


    const handleAddSellEvent = () => {
        onAddSell(true);
    }
    const handleAddTakenEvent = () => {
        onAddTaken(true);
    }
    
    
    
    return(
        <C.Container area={area}>
            <C.InputLabel>
                <C.Button color={"green"} onClick={handleAddSellEvent}>Adicionar Venda</C.Button>
            </C.InputLabel>
            <C.InputLabel>
                <C.Button color={"red"} onClick={handleAddTakenEvent}>Adicionar Retirada</C.Button>
            </C.InputLabel>
        </C.Container>
    );
}