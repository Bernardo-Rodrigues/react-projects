import {useState} from 'react';
import * as C from './App.styles';
import {Item} from './types/item';
import {ListItem} from './components/ListItem';
import {AddArea} from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Prioridade 1', priority:1, done: false},
    {id: 2, name: 'Prioridade 2', priority:2, done: false},
    {id: 3, name: 'Prioridade 3', priority:3, done: false},
    {id: 4, name: 'Prioridade 4', priority:4, done: false},   
  ]);
  const [listDone, setListDone] = useState<Item[]>([]);

  const handleAddTask = (taskName: string, taskNumber: number) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      priority: taskNumber,
      done: false
    });
    setList(newList);
  }

  
  const handleTaskChange = (id: number, done: boolean) => {
    if(done){
      let newList = [...listDone];
      for(let i = 0; i < list.length; i++) {
        if(list[i].id === id) {
          list[i].done = done;
          newList.push(list[i]);
          list.splice(i ,1);
        }
      }
      setListDone(newList);
    }else{
      let newList = [...list];
      for(let i = 0; i < listDone.length; i++) {
        if(listDone[i].id === id) {
          listDone[i].done = done;
          newList.push(listDone[i]);
          listDone.splice(i ,1);
        }
      }
      setList(newList);
    }
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <C.Prioridades>
          <C.Prioridade1>Prioridade 1</C.Prioridade1>
          <C.Prioridade2>Prioridade 2</C.Prioridade2>
          <C.Prioridade3>Prioridade 3</C.Prioridade3>
          <C.Prioridade4>Prioridade 4</C.Prioridade4>
          <C.Prioridade5>Prioridade 5</C.Prioridade5>
        </C.Prioridades>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index)=>(
          <ListItem 
            key={index} 
            item={item}
            onChange={handleTaskChange}
          />
        ))}
        <C.Done>Tarefas Concluídas</C.Done>
        {listDone.map((item, index)=>(
          <ListItem 
            key={index} 
            item={item}
            onChange={handleTaskChange}
          />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;