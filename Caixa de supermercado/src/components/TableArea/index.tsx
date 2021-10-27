import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[]
    area: number;
}

export const TableArea = ({list, area}: Props) => {
    return(
        <C.Table area={area}>
            <thead>
                <tr>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Usuário</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <TableItem key={index} item ={item}/>
                ))}
            </tbody>
        </C.Table>
    );
}