import React from "react";
import styles from './ProfileInfo.module.css';
import defaultUser from '../../../../Other/user.png'
import Preloader from "../../../../Other/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfleStatus/ProfileStatusWithHooks";
import ContactBlock from "./ContactsInfoBlock/ContactBlock/ContactBlock";
import ContactsInfoBlock from "./ContactsInfoBlock/ContactsInfoBlock";

export const ProfileInfo = ({profile, status, updateStatus, isAuth, loggedUserId, changePhoto}) => {
  const onChangedPhoto = (e) => {
    if (e.target.files.length) {
      changePhoto(e.target.files[0]);
    }
  }

  if (!profile) {
    return <div className={styles.preloaderWrapper}><Preloader /></div>
  } else {
    return (
      <div className={styles.profileMainWrapper}>
        <div className={styles.leftBlockWrapper}>
          <div className={styles.photoWrapper}>
            <img className={styles.photo} src={profile.photos.large ? profile.photos.large : defaultUser} alt="UserPhoto"/>
            {(isAuth && loggedUserId === profile.userId) ? <>
              <label className={styles.profileChangePhotoButtonLabel} htmlFor={"changePhoto"}>Изменить фото</label>
              <input className={styles.profileChangePhotoButton} id={"changePhoto"} type={"file"} onChange={onChangedPhoto} title={" "} accept={"image/*"}/>
            </> : ''}
          </div>

          <div className={styles.contactsWrapper}>
            <div className={styles.contactsTitle}>Contacts:</div>
            <ContactsInfoBlock fullContactsArray={profile.contacts} />
          </div>
        </div>
        <div className={styles.rightBlockWrapper}>
          <h1 className={styles.UserName}>{profile.fullName}</h1>

          {(isAuth && loggedUserId === profile.userId) ?
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isAuth={isAuth}/> :
          <span>{status}</span>}


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