import * as C from './styles';
import { formatCurrentDate } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';

type Props =  {
    currentDate: string;
    onDateChange: (newDate: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentDate, onDateChange, income, expense }: Props ) => {
    const handlePrevDate = () => {
        let [year, month, day] = currentDate.split('-');
        let currentDay = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
        currentDay.setDate( currentDay.getDate() - 1);
        onDateChange(`${currentDay.getFullYear()}-${currentDay.getMonth() + 1}-${currentDay.getDate()}`)
    }
    const handleNextDate = () => {
        let [year, month, day] = currentDate.split('-');
        let currentDay = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
        currentDay.setDate( currentDay.getDate() + 1);
        onDateChange(`${currentDay.getFullYear()}-${currentDay.getMonth() + 1}-${currentDay.getDate()}`)
    }

    return(
        <C.Container>
            <C.DateArea>
                <C.DateArrow onClick={handlePrevDate}>⬅️</C.DateArrow>
                <C.DateTitle>{formatCurrentDate(currentDate)}</C.DateTitle>
                <C.DateArrow onClick={handleNextDate}>➡️</C.DateArrow>
            </C.DateArea>
            <C.ResumeArea>
                <ResumeItem title="Vendas" value={income}/>
                <ResumeItem title="Retiradas" value={expense}/>
                <ResumeItem
                    title="Balanço" 
                    value={income - expense}
                    color={(income - expense) < 0 ? 'red' : 'green'}
                />
            </C.ResumeArea>
        </C.Container>
    );
}