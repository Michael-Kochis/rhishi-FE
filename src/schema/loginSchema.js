import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup.string()
        .required('username is required')
        .min(3, 'username must be at least three characters'),
    password: yup.string()
        .required('password is required'),
    confirmPassword: yup.string()
        .required('password confirmation is required'),
    role: yup.string()
        .oneOf(["client", "instructor"])
})

const loginSchema = yup.object().shape({
    username: yup.string()
        .required('username is required')
        .min(3, 'username must be at least three characters'),
    password: yup.string()
        .required('password is required')
})

export {
    loginSchema,
    schema
}