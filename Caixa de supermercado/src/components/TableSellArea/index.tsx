import * as C from './styles';
import { ItemMercado } from '../../types/ItemsMercado';
import { TableItemSellArea } from '../TableItemSellArea';
import { useState } from 'react';
import { items } from '../../data/items';

type Props = {
    listProducts: ItemMercado[]
    area: number;
}

export const TableSellArea = ({listProducts, area}: Props) => {
    let totalDay = 0;

    return(
        <><C.Table area={area}>
            <thead>
                <tr>
                    <C.TableHeadColumn width={130}>Item</C.TableHeadColumn>
                    <C.TableHeadColumn>Preço Unit.</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Quantidade</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {listProducts.map((item, index) => (
                    <TableItemSellArea key={index} item={item} />
                ))}
            </tbody>
        </C.Table>
        <C.Container area={area}>
            <C.Titulo>Total</C.Titulo>
            <C.Total>
                <C.Invisivel>
                    {listProducts.map((item, index) => (
                        totalDay += item.price
                    ))}
                </C.Invisivel>
                ${totalDay}
            </C.Total>
        </C.Container></>
    );
}