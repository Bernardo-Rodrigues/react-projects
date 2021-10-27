import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item'
import { categories } from '../../data/categories';
import { getCurrentDate } from '../../helpers/dateFilter';

type Props = {
    onAdd: (item: Item) => void;
    area: number;
}

export const InputTakenArea = ({ onAdd, area }: Props) => {
        const [dateField, setDateField] = useState('');
        const [destinyField, setDestinyField] = useState('');
        const [idField, setIdField] = useState('');
        const [valueField, setValueField] = useState(0);

        let categoryKeys: string[] = Object.keys(categories);

        const handleAddEvent = () => {
            let errors: string[] = [];

            if(idField === '') {
                errors.push('Título vazio!');
            }
            if(destinyField === '') {
                errors.push('Título vazio!');
            }
            if(valueField <= 0) {
                errors.push('Valor inválido!');
            }

            if(errors.length > 0) {
                alert(errors.join("\n"));
            } else {
            onAdd({
                date: new Date(getCurrentDate()),
                category: 'taken',
                title: idField,
                value: valueField
            });
            clearFields();
            }
        }

        const clearFields = () => {
            setDestinyField('');
            setValueField(0);
        }

        return (
            <C.Container area={area}>
                <C.InputLabel>
                    <C.InputTitle>Id</C.InputTitle>
                    <C.Input type="text" value={idField} onChange={e => setIdField(e.target.value)} />
                </C.InputLabel>
                <C.InputLabel>
                    <C.InputTitle>Destino</C.InputTitle>
                    <C.Input type="text" value={destinyField} onChange={e => setDestinyField(e.target.value)} />
                </C.InputLabel>
                <C.InputLabel>
                    <C.InputTitle>Valor</C.InputTitle>
                    <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
                </C.InputLabel>
                <C.InputLabel>
                    <C.InputTitle>&nbsp;</C.InputTitle>
                    <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
                </C.InputLabel>
            </C.Container>
        );
}