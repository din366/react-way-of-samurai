import React, {useEffect, useState} from "react";
import styles from './ProfleStatus.module.css'

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

   return <>
      {
        editMode === true ?
        <div className={styles.statusWrapper}>
          <input className={styles.inputChangeStatus} onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode } type="text" value={status}/>
        </div> :
        <div className={styles.statusWrapper}>
          <span className={styles.status} onClick={ activateEditMode }>{props.status ? props.status : '----'} <span className={styles.editButton}>edit</span></span>
        </div>
      }
    </>
}

export default ProfileStatusWithHooks;