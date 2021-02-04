import React from 'react'
import { Formik, Field, Form, FormikHelpers, FormikProps } from 'formik'
import MaskedInput from 'react-text-mask'
import * as Yup from 'yup'

const phoneNumberMask = ["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/]

interface Values {
  firstName: string
  lastName: string
  email: string
  phone: string
  address1: string
  address2: string
  city: string
  state: string
  zipcode: string
  gender: string
}

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zipcode: '',
  gender: '',
}

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First Name must be at least 2 characters')
    .max(50, 'First Name must be 50 characters or less')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(2, 'Last Name must be at least 2 characters')
    .max(50, 'Last Name must be 50 characters or less')
    .required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required'),
  address1: Yup.string()
    .required('Address is required'),
  city: Yup.string()
    .required('City is required'),
  state: Yup.string()
    .required('State is required'),
  zipcode: Yup.string()
    .required('Zip Code is required'),
  gender: Yup.string()
    .required('Gender is required'),
})

const FormUsingFormik = () => {
  const handleSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    //Transform any values
    const newValues = {
      ...values, 
      phone: values.phone.replace(/\D/g,''), 
      email: values.email.toLowerCase()
    }
  
    setTimeout(() => {
      alert(JSON.stringify(newValues, null, 2))
      setSubmitting(false)
    }, 500)
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}>
        {(props: FormikProps<any>) =>
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" />
            {props.errors.firstName && props.touched.firstName ? (<span>{props.errors.firstName}</span>) : null}

            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" />
            {props.errors.lastName && props.touched.lastName ? (<span>{props.errors.lastName}</span>) : null}

            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
            {props.errors.email && props.touched.email ? (<span>{props.errors.email}</span>) : null}

            <label htmlFor="phone">Phone</label>
            <Field id="phone" name="phone"
              render={(field: any) => (
                <MaskedInput
                  {...field}
                  mask={phoneNumberMask}
                  id="phone"
                  type="tel"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props.errors.phone && props.touched.phone
                      ? "text-input error"
                      : "text-input"
                  }
                />
              )} 
            />
            {props.errors.phone && props.touched.phone ? (<span>{props.errors.phone}</span>) : null}
            
            <label htmlFor="address1">Address 1</label>
            <Field id="address1" name="address1" type="text" />
            {props.errors.address1 && props.touched.address1 ? (<span>{props.errors.address1}</span>) : null}

            <label htmlFor="address2">Address 2</label>
            <Field id="address2" name="address2" type="text" />
            {props.errors.address2 && props.touched.address2 ? (<span>{props.errors.address2}</span>) : null}

            <label htmlFor="city">City</label>
            <Field id="city" name="city" type="text" />
            {props.errors.city && props.touched.city ? (<span>{props.errors.city}</span>) : null}

            <label htmlFor="state">State</label>
            <Field as="select" id="state" name="state">
              <option value=""></option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Field>
            {props.errors.state && props.touched.state ? (<span>{props.errors.state}</span>) : null}

            <label htmlFor="zipcode">Zip Code</label>
            <Field id="zipcode" name="zipcode" type="text" />
            {props.errors.zipcode && props.touched.zipcode ? (<span>{props.errors.zipcode}</span>) : null}

            <label id="gender-radio-group">Gender</label>
            <div role="group" aria-labelledby="gender-radio-group">
              <label>
                <Field type="radio" name="gender" value="M" /> Male
              </label>
              <label>
                <Field type="radio" name="gender" value="F" /> Female
              </label>
            </div>
            {props.errors.gender && props.touched.gender ? (<span>{props.errors.gender}</span>) : null}

            <button type="submit">Submit</button>
          </Form>
        }
      </Formik>
    </div>
  )
}

export default FormUsingFormik