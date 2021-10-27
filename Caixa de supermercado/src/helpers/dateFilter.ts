import { Item } from '../types/Item';

export const getCurrentDate = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
}
export const filterListByDate = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month, day] = date.split('-');

    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month) &&
            list[i].date.getDate() === parseInt(day)
        ){
            newList.push(list[i]);
        }
    }

    return newList;
}
export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentDate = (currentDate: string): string => {
    let [year, month, day] = currentDate.split('-');
    let months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    return `${day} de ${months[parseInt(month)-1]} de ${year}`;
}