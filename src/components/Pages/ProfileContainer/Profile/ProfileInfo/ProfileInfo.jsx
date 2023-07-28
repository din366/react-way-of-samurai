import React from "react";
import styles from './ProfileInfo.module.css';
import defaultUser from '../../../../Other/user.png'

export const ProfileInfo = ({profile}) => {
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
        {/*<div className={styles.imgBackgroundWrapper}>
          <img className={styles.contentImage} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
        </div>*/}
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
          <span className={styles.userAbout}>{profile.aboutMe}</span>

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