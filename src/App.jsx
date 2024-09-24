import React from 'react'
import './App.css'
import CardButton from './components/CardButton/CardButton'
import JournalItem from './components/JournalItem/JournalItem'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import Body from './layouts/Body/Body'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import { useState } from 'react';
import Modal from 'react-modal';

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
      </JournalList>
    </LeftPanel>
    <Body>
      Body
    </Body>
    </div>
  )
}

export default App;
