import React, { useContext } from 'react';
// import styled from 'styled-components';
// import { themeGet } from '@styled-system/theme-get';
import * as Yup from 'yup';
import { closeModal } from '@redq/reuse-modal';
import { FormikProps, Formik, Form } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { ProfileContext } from 'contexts/profile/profile.context';
import Button from 'components/Button/Button';
import { FieldWrapper, Heading } from './Update.style';
import { UPDATE_ADDRESS, ADD_NEW_ADDRESS } from 'graphql/mutation/address';
import TextField from 'components/TextField/TextField';

type Props = {
  item?: any | null;
};
// Shape of form values
type FormValues = {
  id?: number | null;
  type?: string;
  name: string;
  info: string;
};

const AddressValidationSchema = Yup.object().shape({
  name: Yup.string().required('Title is required'),
  info: Yup.string().required('Address is required'),
});

const UpdateAddress: React.FC<Props> = ({ item }) => {
  const initialValues = {
    id: item.id || null,
    slug: item.slug || null,
    type: item.type || 'secondary',
    name: item.name || "",
    info: item.info || "",
  };
  const [addAddressMutation] = (item && item.slug) ? useMutation(UPDATE_ADDRESS) : useMutation(ADD_NEW_ADDRESS);
  const { 
    // state, 
  dispatch } = useContext(ProfileContext);
  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    // console.log(values)
    const {data} = await addAddressMutation({
      variables: values,
    });
    // console.log(values, 'formik values');
    dispatch({ type: 'ADD_OR_UPDATE_ADDRESS', payload: data });
    closeModal();
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={AddressValidationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        isSubmitting,
        touched,
        errors
      }: FormikProps<FormValues>) => (
        <Form>
          <Heading>{item && item.id ? 'Edit Address' : 'Add New Address'}</Heading>
           <FieldWrapper>
             <TextField
               id='name'
               type='text'
               placeholder='Enter Title'
               error={touched.name && errors.name}
               value={values.name}
               onChange={handleChange}
               onBlur={handleBlur}
             />
           </FieldWrapper>

           <FieldWrapper>
             <TextField
               id='info'
               as='textarea'
               placeholder='Enter Address'
               error={touched.info && errors.info}
               value={values.info}
               onChange={handleChange}
               onBlur={handleBlur}
             />
           </FieldWrapper>

          <Button
            disabled={isSubmitting}
            type='submit'
            title='Save Contact'
            size='medium'
            fullwidth={true}
          />
        </Form>
      )}
    </Formik>
  );
};

export default UpdateAddress;

// const StyledInput = styled.input`
//   width: 100%;
//   height: 54px;
//   border-radius: 6px;
//   font-family: ${themeGet('colors.fontFamily', 'Lato, sans-serif')};
//   border: 1px solid ${themeGet('colors.borderColor', '#e6e6e6')};
//   color: ${themeGet('colors.darkBold', '#0D1136')};
//   font-size: 16px;
//   line-height: 19px;
//   font-weight: 400;
//   padding: 0 18px;
//   box-sizing: border-box;
//   transition: border-color 0.25s ease;

//   &:hover,
//   &:focus {
//     outline: 0;
//   }

//   &:focus {
//     border-color: ${themeGet('colors.primary', '#3da2ff')};
//   }

//   &::placeholder {
//     color: ${themeGet('colorsdarkRegular', '#77798C')};
//   }
// `;

// const StyledError = styled.div`
//   color: red;
//   padding-bottom: 10px;
//   margin-top: -5px;
// `;