import React from "react";
import styles from './ContactBlock.module.css';

const ContactBlock = ({contactInfo}) => {
  return <span key={contactInfo[0]} className={styles.contactsBlock}><b>{contactInfo[0]}:</b> {contactInfo[1]}</span>
}

export default ContactBlock;