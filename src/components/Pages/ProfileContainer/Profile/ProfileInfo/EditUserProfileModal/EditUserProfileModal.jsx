import React, {useEffect, useState} from "react";
import styles from './EditUserProfileModal.module.css';
import {Field, Form, Formik} from "formik";
import {EditProfileInfoValidationSchema} from "../../../../../../utils/validationForms";
import Preloader from "../../../../../Other/Preloader/Preloader";

const EditUserProfileModal = ({profile, editUserInfo, setEditUserMode, sendUserDataStatus, isGeneralSendUserDataErrorMessage, isGeneralSendUserDataError}) => {

  const createFormikTextField = (formDataName, labelTitle, placeholder, errorsObject) => {
    return <div className={styles.inputWrapper}>
            <label htmlFor={formDataName}>{labelTitle}:</label>
            <Field className={styles.input} id={formDataName} name={formDataName} placeholder={placeholder} type="text"/>
            {errorsObject[formDataName] && <div className={styles.errorBlock}>{errorsObject[formDataName]}</div>}
          </div>
  }

  return <div className={styles.modalWrapper}>
    <div className={styles.modalWrapperGrayOpacity} onClick={() => setEditUserMode(false)}></div>

      <Formik
        initialValues={{
          aboutMe: profile.aboutMe || '',
          facebookContact: profile.contacts.facebook || '',
          githubContact: profile.contacts.github || '',
          twitterContact: profile.contacts.twitter || '',
          websiteContact: profile.contacts.website || '',
          fullName: profile.fullName || '',
          lookingForAJob: profile.lookingForAJob,
          lookingForAJobDescription: profile.lookingForAJobDescription ? profile.lookingForAJobDescription : '',
        }}
        validationSchema={EditProfileInfoValidationSchema}
        onSubmit={ (formData, {setFieldValue}) => {
          editUserInfo(
            profile.userId,
            formData.aboutMe === '' ? "---" : formData.aboutMe,
            formData.fullName,
            {
              lookingForAJob: formData.lookingForAJob === "" ? false : formData.lookingForAJob,
              lookingForAJobDescription: formData.lookingForAJobDescription || "---"
            },
            {
              facebookContact: formData.facebookContact === "" ? null : formData.facebookContact,
              githubContact: formData.githubContact === "" ? null : formData.githubContact,
              instagramContact: null,
              mainLinkContact: null,
              twitterContact: formData.twitterContact === "" ? null : formData.twitterContact,
              vkContact: null,
              websiteContact: formData.websiteContact === "" ? null : formData.websiteContact,
              youtubeContact: null,
            },
            setFieldValue,
          );
        }}
      >
        {({errors, touched, dirty, isValid, valid}) => {
          return <Form className={styles.formzindex}>
            <div className={styles.modalBlock}>
              <button className={styles.closeButton} onClick={() => setEditUserMode(false)} type="button"></button>
              <div className={styles.leftBlock}>
                <span className={styles.modalBlockSubtitle}>General info:</span>

                {createFormikTextField('fullName', 'Your name', 'Change your full name', errors)}
                {createFormikTextField('aboutMe', 'About Me', 'Change about me info', errors)}

                <span className={styles.modalBlockSubtitle}>Job status:</span>

                <div className={styles.inputWrapper + ' ' + styles.checkboxWrapper}>
                  <label htmlFor="lookingForAJob" className={styles.checkboxLabel}>looking for a job</label>
                  <Field className={styles.checkbox} id="lookingForAJob" name="lookingForAJob" type="checkbox"/>
                </div>

                {createFormikTextField('lookingForAJobDescription', 'Job description', 'select search job description', errors)}
              </div>

              <div className={styles.rightContactsBlock}>
                <span className={styles.modalBlockSubtitle}>Contacts:</span>

                {createFormikTextField('facebookContact', 'Facebook', 'your facebook account', errors)}
                {createFormikTextField('githubContact', 'Github', 'your github account', errors)}
                {createFormikTextField('twitterContact', 'Twitter', 'your twitter account', errors)}
                {createFormikTextField('websiteContact', 'Website', 'your website', errors)}
              </div>



              <div className={styles.confirmButtonsBlock}>
                <div className={`${styles.generalErrorFetchingWrapper} ${isGeneralSendUserDataError ? styles.setHeightErrorWrapper : ''} `}>
                  {isGeneralSendUserDataError ? <div className={styles.generalErrorFetching}>{isGeneralSendUserDataErrorMessage}</div> : ''}
                </div>

                <div className={styles.buttonWrapper}>
                  <button type="submit" className={styles.authButton} disabled={!(isValid && dirty)}>Change</button>
                  <div className={styles.preloaderWrapper}>{sendUserDataStatus ? <Preloader/> : ''}</div>
                </div>
              </div>

            </div>
          </Form>
        }}
      </Formik>

  </div>
}

export default EditUserProfileModal;