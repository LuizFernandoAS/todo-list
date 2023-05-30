import { Header } from './components/Header';
import { Task } from './components/Task';
import { PlusCircle } from '@phosphor-icons/react';

import styles from './App.module.css';
import "./global.css"


export function App() {
  return (<div>
      <Header/>
      <form className={styles.newTask}>
          <input type="text" placeholder="Adicione uma nova tarefa"/>
          <button>
            Criar <PlusCircle size={16}/>
          </button>
      </form>
      <Task/>
      
  </div>
  )
}

