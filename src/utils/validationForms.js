import * as Yup from 'yup';

export const LoginValidationSchema = Yup.object().shape({
  login: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const EditProfileInfoValidationSchema = Yup.object().shape({
  aboutMe: Yup.string()
    .min(2, 'min 5 characters')
    .max(50, 'Too Long!'),
  facebookContact: Yup.string().matches(/facebook.com|^https:\/\/facebook.com|http:\/\/facebook.com/gm, 'Enter correct facebook URL').nullable()
    .min(12, 'Too Short!')
    .max(50, 'Too Long!'),
  githubContact: Yup.string().matches(/github.com|^https:\/\/github.com|http:\/\/github.com/gm, 'Enter correct github URL').nullable()
    .min(10, 'Too Short!')
    .max(50, 'Too Long!'),
  twitterContact: Yup.string().matches(/twitter.com|^https:\/\/twitter.com|http:\/\/twitter.com/gm, 'Enter correct twitter URL').nullable()
    .min(11, 'Too Short!')
    .max(50, 'Too Long!'),
  websiteContact: Yup.string().matches(/.com|.ru|.by|.site|.dev|.io/gm, 'only .com .ru .by .site .dev .io domens').nullable()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!'),
  fullName: Yup.string()
    .min(5, 'min 5 characters')
    .max(50, 'Too Long!'),
  lookingForAJobDescription: Yup.string()
    .min(3, 'min 3 characters')
    .max(50, 'Too Long!'),
});
