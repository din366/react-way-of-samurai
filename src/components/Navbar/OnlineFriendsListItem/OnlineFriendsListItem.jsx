import React, {useEffect, useState} from "react";
import styles from './OnlineFriendsListItem.module.css';
import defaultImage from '../../Other/user.png';
import {dialogsApi} from "../../../api/api";
import {Link} from "react-router-dom";

const OnlineFriendsListItem = (props) => {
  const [friendsList, getFriendsList] = useState([]);

  useEffect(() => {
    let getFriends = async () => {
      return await dialogsApi.getFriends().then(res => getFriendsList(res.items));
    }

    getFriends();
  }, [])

  return (<>
    {friendsList.map((item, index) => index > 6 ? "" : <Link to={`profile/${item.id}`} className={styles.friendItem} data-id={item.id} key={item.id}>
      <img src={item.photos.large ? item.photos.large : defaultImage} alt="userPhoto"/>
      <span>{item.name}</span>
    </Link>
    )}
  </>);
};

export default OnlineFriendsListItem;