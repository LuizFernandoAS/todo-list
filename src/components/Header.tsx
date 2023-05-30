import styles from './Header.module.css';
import logotodo from '../assets/logo-todo.svg';


export function Header(){
  return(
    <header className={styles.header}>
          <img src={logotodo}/>
          
      </header>
  )
}