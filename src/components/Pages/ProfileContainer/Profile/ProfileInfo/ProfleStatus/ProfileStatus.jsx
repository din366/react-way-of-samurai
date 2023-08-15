import React from "react";
import styles from './ProfleStatus.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({editMode: true});
  }

  deactivateEditMode = () => {
    this.setState({editMode: false});
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render () {
    return <>
      {this.state.editMode === true ?
        <div className={styles.statusWrapper}>
          <input className={styles.inputChangeStatus} onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } type="text" value={this.state.status}/>
        </div> :
        <div className={styles.statusWrapper}>
          <span className={styles.status} onClick={ this.activateEditMode }>{this.props.status ? this.props.status : '----'} <span className={styles.editButton}>edit</span></span>
        </div>
      }
    </>
  }
}

export default ProfileStatus;