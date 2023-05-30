import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react';


export function Task(){
  return(
    <div>
        <header>
          <strong>Tarefas criadas<span>0</span></strong>
          <strong>Concluídas<span>0</span></strong>
        </header>

        <main>
          <div>
            <button></button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eligendi laboriosam saepe placeat illum, officia magnam unde repellat assumenda nobis dolore eos ratione animi culpa dolor possimus odit! Dicta, necessitatibus.</p>
            <button><Trash/> </button>
          </div>
        </main>
      </div>
  )
}