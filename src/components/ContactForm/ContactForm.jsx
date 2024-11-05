import s from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useId } from 'react';

const FeedbackScheme = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
})



export default function ContactForm({initialValues, handleSubmit}) {
    const nameId = useId();
    const numberId = useId();

    return (
        <div className={s.formDiv}>  
            <h1 className={s.title}>Phonebook</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackScheme}>
                <Form className={s.form}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type='text' name='name' id={nameId} className={s.inputs}></Field>
                    <ErrorMessage name='name' component='span'></ErrorMessage>
                    <label htmlFor={numberId}>Number</label>
                    <Field type='number' name='number' id={numberId} className={s.inputs}></Field>
                    <ErrorMessage name='number' component='span'></ErrorMessage>
                    <button type='submit' className={s.addBtn}>Add contact</button>
                </Form>
            </Formik>
       </div>
    )
}