import * as C from './styles';
import { ItemMercado } from '../../types/ItemsMercado';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: ItemMercado;
}

export const TableItemSellArea = ({item}: Props) => {
    return(
        <C.TableLine>
            <C.TableColumn>{item.name}</C.TableColumn>
            <C.TableColumn>{item.value}</C.TableColumn>
            <C.TableColumn>{item.quantity}</C.TableColumn>
            <C.TableColumn>{item.price}</C.TableColumn>
        </C.TableLine>
    );
}