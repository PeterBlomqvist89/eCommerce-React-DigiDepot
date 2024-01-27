import { useFormik } from "formik";
import { RegisterFormSchema } from "../lib/Schemas"
import { FormInput } from "./FormInput";
import axios from 'axios';
import { Modal } from "./Modal";
import { useState } from "react";

export const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: RegisterFormSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('https://js2-ecommerce-api.vercel.app/api/messages', values);
        console.log(response.data);
        console.log(response);
        setIsModalOpen(true);
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });


  const onBack = () => {
    setIsModalOpen(false);
    form.resetForm();
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit} className="reg-form" noValidate>
        <FormInput
          label="Name:"
          id="name"
          name="name"
          type="text"
          value={form.values.name}
          onChange={form.handleChange}
          errorMsg={form.errors.name && form.touched.name && form.errors.name}
          onBlur={form.handleBlur}
        />
        <FormInput
          label="Email:"
          id="email"
          name="email"
          type="email"
          value={form.values.email}
          onChange={form.handleChange}
          errorMsg={form.errors.email && form.touched.email && form.errors.email}
          onBlur={form.handleBlur}
        />
        <FormInput
          label="Your Message:"
          id="message"
          name="message"
          type="text"
          value={form.values.message}
          onChange={form.handleChange}
          errorMsg={form.errors.message && form.touched.message && form.errors.message}
          onBlur={form.handleBlur}
        />

        <button type="submit" className="btn-show">
          Send message!
        </button>
      </form>
      <Modal isOpen={isModalOpen} onBack={onBack} />
    </div>
  );
};