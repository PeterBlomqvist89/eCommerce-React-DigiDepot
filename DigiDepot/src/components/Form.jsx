import { useFormik } from "formik";
import { RegisterFormSchema } from "../lib/Schemas"
import { FormInput } from "./FormInput";
import axios from 'axios';

export const Form = () => {

    const form = useFormik({
      initialValues: {
        name: '',
        email: '',
        message: ''
      },
      validationSchema: RegisterFormSchema,
      onSubmit: async (values) => {
        try {
          // Gör en POST-förfrågan med Axios
          const response = await axios.post('https://js2-ecommerce-api.vercel.app/api/messages', values);
  
          // Logga svaret från servern
          console.log(response.data);

        } catch (error) {
          // Hantera fel här
          console.error('Error:', error);
        }
      },
    });
  
    // console.log(form)
  
    return (
      <form onSubmit={form.handleSubmit} className="reg-form" noValidate>
        <FormInput
          label="Name"
          id="name"
          name="name"
          type="text"
          value={form.values.name}
          onChange={form.handleChange}
          errorMsg={form.errors.name && form.touched.name && form.errors.name}
          onBlur={form.handleBlur}
        />
        <FormInput
          label="Email"
          id="email"
          name="email"
          type="email"
          value={form.values.email}
          onChange={form.handleChange}
          errorMsg={form.errors.email && form.touched.email && form.errors.email}
          onBlur={form.handleBlur}
        />
        <FormInput
          label="message"
          id="message"
          name="message"
          type="text"
          value={form.values.message}
          onChange={form.handleChange}
          errorMsg={form.errors.message && form.touched.message && form.errors.message}
          onBlur={form.handleBlur}
        />
        
     
      
  
        <button type="submit" className="btn-show">Register</button>
        {/* <p>{JSON.stringify(formData)}</p> */}
      </form>
    )
  }