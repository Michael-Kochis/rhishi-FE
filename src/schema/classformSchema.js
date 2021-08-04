import * as yup from 'yup'

const classFormSchema = yup.object().shape({
    name: yup.string()
        .required('Class must have a name'),
    type: yup.string()
        .required('Class must have a type'),
    startTime: yup.string()
        .required('Must have a start time and date'),
    duration: yup.number()
        .required('Must have a duration'),
    intensityLevel: yup.string()
        .required('must have an intensity level'),
    location: yup.string()
        .required('Must have a location'),
    attendees: yup.number(),
    maxClassSize: yup.number()
        .required('Must have a maximum class size')
})

export {
    classFormSchema
}