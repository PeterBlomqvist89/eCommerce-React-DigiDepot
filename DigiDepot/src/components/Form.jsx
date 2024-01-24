import { useFormik } from "formik";
import { RegisterFormSchema } from "../lib/Schemas"
import { FormInput } from "./FormInput";

export const Form = () => {

    const form = useFormik({
      initialValues: {
        Name: '',
        email: '',
        message: ''
      },
      validationSchema: RegisterFormSchema,
      onSubmit: (values) => {
        console.log(values)
      }
    })
  
    console.log(form)
  
    return (
      <form onSubmit={form.handleSubmit} className="reg-form" noValidate>
        <FormInput
          label="Name"
          id="Name"
          name="Name"
          type="text"
          value={form.values.Name}
          onChange={form.handleChange}
          errorMsg={form.errors.Name && form.touched.Name && form.errors.Name}
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