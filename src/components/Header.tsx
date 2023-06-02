import styles from './Header.module.css';
import logotodo from '../assets/logo-todo.svg';
import { PlusCircle } from '@phosphor-icons/react';


export function Header(){
  return(
  <>
    <header className={styles.header}>
      <img src={logotodo}/>    
    </header>

    <form className={styles.newTask}>
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <button>
        Criar <PlusCircle size={16} weight="bold"/>
      </button>
    </form>
 </>
  )
}