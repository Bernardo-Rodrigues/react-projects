import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item'
import { itemsMercado } from '../../data/itemsMercado';
import { getCurrentDate } from '../../helpers/dateFilter';
import { ItemMercado } from '../../types/ItemsMercado';
import { items } from '../../data/itemsSell';

type Props = {
    onAddSell: (itemMercado: ItemMercado) => void;
    onAdd: (item: Item) => void;
    area: number;
}

export const InputSellArea = ({ onAdd, onAddSell, area }: Props) => {
        const [idField, setIdField] = useState('');
        const [itemsField, setItemsField] = useState('');
        const [priceField, setPriceField] = useState(0);
        const [quantityField, setQuantityField] = useState(0);
        const [totalSell, setTotalSell] = useState(0);

        let itemsKeys: string[] = Object.keys(itemsMercado);

        const handleSellItem = () => {
            let errors: string[] = [];

            if(idField === '') {
                errors.push('Item inválido!');
            }
            if(!itemsKeys.includes(itemsField)) {
                errors.push('Item inválido!');
            }
            if(priceField <= 0) {
                errors.push('Preço vazio!');
            }
            if(quantityField <= 0) {
                errors.push('Quantidade inválida!');
            }

            if(errors.length > 0) {
                alert(errors.join("\n"));
            } else {
            onAddSell({
                date: new Date(getCurrentDate()),
                name: itemsField,
                value:  quantityField,
                quantity:  priceField,
                price:  quantityField * priceField
            });
            clearFields();
            setTotalSell(totalSell + quantityField * priceField)
            }
        }

        const clearFields = () => {
            setItemsField('');
            setPriceField(0);
            setQuantityField(0);
        }
        const handleAddEvent = () => {
            setTotalSell(0);
            onAdd({
                date: new Date(getCurrentDate()),
                category: "sell",
                title: idField,
                value:  totalSell
            });
        }

        return (
            <C.Container area={area}>
                <C.InputLabel>
                    <C.InputTitle>Id</C.InputTitle>
                    <C.Input type="text" value={idField} onChange={e => setIdField(e.target.value)} />
                </C.InputLabel>
                <C.InputLabel>
                    <C.InputTitle>Item</C.InputTitle>
                    <C.Select value={itemsField} onChange={e => setItemsField(e.target.value)}>
                        <>
                        <option></option>
                        {itemsKeys.map((key, index) => (
                            <option key={index} value={key}>{itemsMercado[key].name}</option>
                        ))}
                        </>
                    </C.Select>
                </C.InputLabel>
                <C.InputLabel>
                    <C.InputTitle>Preço Unit.</C.InputTitle>
                    <C.Input type="number" value={priceField} onChange={e => setPriceField(parseFloat(e.target.value))} />
                </C.InputLabel>
                <C.InputLabel>
                    <C.InputTitle>Quantidade</C.InputTitle>
                    <C.Input type="number" value={quantityField} onChange={e => setQuantityField(parseFloat(e.target.value))} />
                </C.InputLabel>
                <C.InputLabel>
                    <C.InputTitle>&nbsp;</C.InputTitle>
                    <C.Button onClick={handleSellItem}>Adicionar Item</C.Button>
                </C.InputLabel>
                <C.InputLabel>
                    <C.InputTitle>&nbsp;</C.InputTitle>
                    <C.Button onClick={handleAddEvent}>Fechar Compra</C.Button>
                </C.InputLabel>
            </C.Container>
        );
}