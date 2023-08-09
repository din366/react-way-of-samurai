import React from "react";
import styles from './ProfileInfo.module.css';
import defaultUser from '../../../../Other/user.png'
import ProfileStatus from "./ProfleStatus/ProfileStatus";

export const ProfileInfo = ({profile, status, updateStatus}) => {
  const renderContacts = (data) => {
    const sortData = Object.entries(data);
    let createdContactBlock = [];
    sortData.map((item) => {
      if (item[1]) {
        createdContactBlock.push(<span className={styles.contactsBlock}><b>{item[0]}:</b> {item[1]}</span>)
      };
    });
    return <div>{createdContactBlock}</div>
  }

  if (!profile) {
    return <div>Error 500</div>
  } else {
    return (
      <div className={styles.profileMainWrapper}>
        <div className={styles.leftBlockWrapper}>
          <div className={styles.photoWrapper}>
            <img className={styles.photo} src={profile.photos.large ? profile.photos.large : defaultUser} alt="UserPhoto"/>
          </div>
          <div className={styles.contactsWrapper}>
            <div className={styles.contactsTitle}>Contacts:</div>
            {renderContacts(profile.contacts)}
          </div>
        </div>
        <div className={styles.rightBlockWrapper}>
          <h1 className={styles.UserName}>{profile.fullName}</h1>
          <ProfileStatus status={status} updateStatus={updateStatus}/>
          <span className={styles.userAbout}>About me: {profile.aboutMe}</span>

          {profile.lookingForAJob ?
            <div className={styles.jobBlockWrapper}>
              <span className={styles.jobStatus}><b>Job status:</b> {profile.lookingForAJob === true ? 'В поиске работы' :
              profile.lookingForAJob === false ? 'Уже работаю' :
                'Не указано'}</span>
              {profile.lookingForAJobDescription ? <span className={styles.jobDescription}><b>Описание работы:</b> {profile.lookingForAJobDescription}</span> : ''}
          </div>
            : ''}

        </div>
      </div>
    );
  }
};