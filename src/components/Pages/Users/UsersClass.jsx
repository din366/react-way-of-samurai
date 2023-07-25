import React from "react";
import styles from './Users.module.css';
import axios from "axios";
import defaultImg from '../Dialogs/DialogsList/DialogsItem/user.png';


class UsersClass extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
      });
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [];
    for (let i=1; i<=pagesCount; i++) {
      pages.push(i);
    }

    return <>
      <div>
        {this.props.users.map(user =>
          <div key={user.id}>
            <div className={styles.leftBlock}>
              <img className={styles.userImg} src={user.photos.small ?  user.photos.small : defaultImg} alt=""/>
              {user.followed === true ?
                <button onClick={() => {this.props.unfollow(user.id)}} className={styles.followButton}>Unfollow</button> :
                <button onClick={() => {this.props.follow(user.id)}} className={styles.followButton}>Follow</button>}
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.nameBlockWrapper}>{user.name}</div>
              <div className={styles.statusBlockWrapper}>{user.status}</div>
            </div>
          </div>
        )}
      </div>
      <div>
        {pages.map(pageNumber => <span className={this.props.currentPage === pageNumber && styles.selectedPage} onClick={() => {this.onPageChanged(pageNumber)}}>{pageNumber}</span>)}
      </div>
    </>
  }
}

export default UsersClass;