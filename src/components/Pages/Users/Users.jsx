import React from "react";
import styles from './Users.module.css';
import axios from "axios";
import defaultImg from '../Dialogs/DialogsList/DialogsItem/user.png';

const Users = ({users, follow, unfollow, setUsers}) => {

  if (users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {setUsers(res.data.items)});

    /*setUsers([
      {id: 1, photoUrl: 'https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-04-20%2021-31-01', fullName: 'Dmitry', status: 'good job!', location: {city: 'Minsk', country: 'Belarus'}, followed: true},
      {id: 2, photoUrl: 'https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-04-20%2021-31-01', fullName: 'Sasha', status: 'Test', location: {city: 'Kiev', country: 'Ukraine'}, followed: false},
      {id: 3, photoUrl: 'https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-04-20%2021-31-01', fullName: 'Kolya', status: 'deleted status', location: {city: 'Moscow', country: 'Russia'}, followed: true},
    ]);*/
  }


  return (
    <div>{users.map(user => <div key={user.id}>
        <div className={styles.leftBlock}>
          <img className={styles.userImg} src={user.photos.small ?  user.photos.small : defaultImg} alt=""/>
          {user.followed === true ?
            <button onClick={() => {unfollow(user.id)}} className={styles.followButton}>Unfollow</button> :
            <button onClick={() => {follow(user.id)}} className={styles.followButton}>Follow</button>}
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.nameBlockWrapper}>{user.name}</div>
          <div className={styles.statusBlockWrapper}>{user.status}</div>
          {/*<div className={styles.countryBlockWrapper}>{user.location.country}, {user.location.city}</div>*/}
        </div>
      </div>
    )}</div>
  )
}

export default Users;