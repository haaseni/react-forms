import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

type FormData = {
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

const schema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required')
        .min(2, 'First Name must be at least 2 characters')
        .max(50, 'First Name must be 50 characters or less'),
    lastName: Yup.string()
        .required('Last Name is required')
        .min(2, 'Last Name must be at least 2 characters')
        .max(50, 'Last Name must be 50 characters or less'),
    email: Yup.string()
        .required('Email is required')
        .email('Invalid email'),
    phone: Yup.string()
        .required('Phone number is required')
        .min(11, 'Invalid phone number'),
    address1: Yup.string()
        .required('Address is required'),
    city: Yup.string()
        .required('City is required'),
    state: Yup.string()
        .required('State is required'),
    zipcode: Yup.string()
        .required('Zip Code is required'),
    gender: Yup.string()
        .nullable()
        .required('Gender is required'),
})

const FormUsingHookForms = () => {
    const { register, handleSubmit, control, errors } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = handleSubmit((data: FormData) => {
        //Transform data
        const finalData = {...data, email: data.email.toLowerCase()}

        console.log(finalData);
    })    

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" defaultValue="" ref={register} />
            {errors.firstName && <span>{errors.firstName.message}</span>}

            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" defaultValue="" ref={register} />
            {errors.lastName && <span>{errors.lastName.message}</span>}

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" defaultValue="" ref={register} />
            {errors.email && <span>{errors.email.message}</span>}

            <label htmlFor="phone">Phone</label>
            <Controller
                as={PhoneInput}
                control={control}
                name="phone"
                defaultValue={""}
                placeholder=""
            />
            {errors.phone && <span>{errors.phone.message}</span>}

            <label htmlFor="address1">Address 1</label>
            <input id="address1" name="address1" defaultValue="" ref={register} />
            {errors.address1 && <span>{errors.address1.message}</span>}

            <label htmlFor="address2">Address 2</label>
            <input id="address2" name="address2" defaultValue="" ref={register} />
            {errors.address2 && <span>{errors.address2.message}</span>}

            <label htmlFor="city">City</label>
            <input id="city" name="city" defaultValue="" ref={register} />
            {errors.city && <span>{errors.city.message}</span>}

            <label htmlFor="state">State</label>
            <select id="state" name="state" ref={register}>
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
            </select>

            <label htmlFor="zipcode">Zip Code</label>
            <input id="zipcode" name="zipcode" defaultValue="" ref={register} />
            {errors.zipcode && <span>{errors.zipcode.message}</span>}

            <label id="gender-radio-group">Gender</label>
            <div role="group" aria-labelledby="gender-radio-group">
              <label>
                <input type="radio" name="gender" value="M" ref={register} /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="F" ref={register} /> Female
              </label>
            </div>
            {errors.gender && <span>{errors.gender.message}</span>}

            <button type="submit">Submit</button>
        </form>
    )
}

export default FormUsingHookForms