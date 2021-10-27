import { useState, useEffect } from 'react'
import * as C from './App.styles';
import { Item } from './types/Item';
import { ItemMercado } from './types/ItemsMercado';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentDate, filterListByDate } from './helpers/dateFilter';

import { TableArea } from './components/TableArea';
import { TableSellArea } from './components/TableSellArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { InputSellArea } from './components/InputSellArea';
import { InputTakenArea } from './components/InputTakenArea';

const App = () => {
  const [Daylist, setDayList] = useState(items);
  const [filteredDayList, setFilteredDayList] = useState<Item[]>([]);
  const [filteredSellList, setFilteredSellList] = useState<ItemMercado[]>([]);
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [area, setArea] = useState(1);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredDayList){
      if(categories[filteredDayList[i].category].expense){
        expenseCount += filteredDayList[i].value;
      } else {
        incomeCount += filteredDayList[i].value;
      }

      setIncome(incomeCount);
      setExpense(expenseCount);
    }
  }, [filteredDayList]);

  useEffect(()=>{
    setFilteredDayList( filterListByDate(Daylist, currentDate) );
  }, [Daylist, currentDate]);

  const handleDateChange = (newDate: string) => {
    setCurrentDate(newDate);
    setIncome(0);
    setExpense(0);
  }

  const handleSellItem = (item: ItemMercado) => {
    let newList = [...filteredSellList];
    newList.push(item);
    setFilteredSellList(newList);
  }

  const handleAddItem = (item: Item) => {
    setFilteredSellList([]);
    let newList = [...Daylist];
    newList.push(item);
    setDayList(newList);
    setArea(1);
  }
  
  const handleAddSellItem = (estado: boolean) => {
    setArea(2);
  }
  const handleAddTakenItem = (estado: boolean) => {
    setArea(3);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Caixa Diário</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea 
          currentDate={currentDate}
          onDateChange={handleDateChange}
          income={income}
          expense={expense}
        />
        
        <InputArea area={area} onAddSell={handleAddSellItem} onAddTaken={handleAddTakenItem}/>
        <InputSellArea area={area} onAdd={handleAddItem} onAddSell={handleSellItem} />
        <InputTakenArea area={area} onAdd={handleAddItem} />
        
        <TableArea area={area} list={filteredDayList} />
        <TableSellArea area={area} listProducts={filteredSellList} />

      </C.Body>
    </C.Container>
  );
}

export default App;