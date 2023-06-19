import * as yup from "yup"

export const schema = yup.object({
    email: yup.string().email('Not a valid email format').required('Email is required'),
    password: yup.string().required('Password is required').min(6,'Password length must more or equal to 6').matches(/[ a-zA-Z0-9]*/, 'Password must contain alphabet and numeric character')
})