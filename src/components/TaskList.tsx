import { Task } from './Task'
import styles from './TaskList.module.css'

export function TaskList(){

  return(
    <div className={styles.taskList}>
        <header>
          <strong>Tarefas criadas<span>0</span></strong>
          <strong>Concluídas<span>0</span></strong>
        </header>

        <main>
          <Task checked={true} />
          <Task checked={false}/>
          <Task checked/>
        </main>
    </div>
  )
}