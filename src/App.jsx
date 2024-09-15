import React from 'react'
import './App.css'
import Button from './components/Button/Button'
import CardButton from './components/CardButton/CardButton'
import JournalItem from './components/JournalItem/JournalItem'
import LeftPanel from './layouts/LeftPanel/LeftPanel'

function App() {
  const data = [
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
  return (
    <div className="app">
    <LeftPanel>

    </LeftPanel>
    <Body>

    </Body>
      <h1>Заголовок</h1>
      <p>Какой-то текст</p>
      <Button/>
      <CardButton>
        Новое воспоминание
      </CardButton>
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
    </div>
  )
}

export default App;
