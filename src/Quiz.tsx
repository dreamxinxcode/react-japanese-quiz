import React from 'react'
import Character from './Character';
import ChoicesArea from './ChoicesArea';
import './Quiz.scss';

function Quiz() {
  return (
    <div id='quiz'>
      <Character />
      <ChoicesArea />
    </div>
  )
}

export default Quiz
