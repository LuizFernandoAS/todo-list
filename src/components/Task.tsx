import { Trash, Check } from "@phosphor-icons/react";
import styles from "./Task.module.css";

interface checkedProps{
  checked: boolean;
}

export function Task({checked}:checkedProps){
  return(
    <div className={styles.task}>
      <button className={checked? styles.checkListChecked:styles.checkListEmpty}>
        <Check size={10} weight="bold"/>
      </button>

      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button><Trash/></button>
    </div>
  )
}