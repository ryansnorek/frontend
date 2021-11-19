import * as yup from 'yup';

const formSchema = yup.object().shape({
    password: yup
        .string()
        .required('Password is required')
        .min(3, 'Enter your PASSWORD HERE (must be 3 characters or more)'),
    username: yup
        .string().required('Username is required'),
})
export default formSchema;