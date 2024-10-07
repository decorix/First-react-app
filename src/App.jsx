import React from 'react';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import Button from './components/Button/Button';



function App() {

  const data = [
    {
      title: 'Пора начать писать дипломную работу',
      text: 'Ну что, дружище, последний курс, начинаем писать дипломную работу',
      date: new Date()
    },
    {
      title: 'Подготовка к обновлению курсов',
      text: 'Горные походы открывают удивительные природные ландшафты',
      date: new Date()
    },
    {
      title: 'Поход в горы',
      text: 'Думал, что очень много времени',
      date: new Date()
    }
  ]

  const inputChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <div className="app flex p-[30px]">
      <LeftPanel>
        <Header/>
        <JournalAddButton/>
        <JournalList>
          <CardButton>
            <JournalItem
            data={data[0]}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              data={data[1]}
            />
          </CardButton>
          <CardButton>
            <JournalItem
            data={data[2]}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>
        <Button/>
        <input type="text" onChange={inputChange}/>
      </Body>
    </div>
  )
}

export default App;
