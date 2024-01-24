import * as Yup from 'yup'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


export const RegisterFormSchema = Yup.object({
  Name: Yup.string()
    .required('You need to enter a name..')
    .min(2, 'Your name must be atleast 2 chars long'),
  
  email: Yup.string()
    .required('You need to enter an email address..')
    .matches(emailRegex, 'You need to enter a valid email address'),

    message: Yup.string()
    .required('You need to enter a message...')
    

})