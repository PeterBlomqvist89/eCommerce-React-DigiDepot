import { Form } from "../components/Form"
import './contact.css';

function Contact() {
  return (
    <div className="home-container wrapper">
      <h1>Hello!</h1> 
      <h2>Feel free to contact us</h2>
      <div className="form-class">
      <Form />
      </div>
    </div>
  )
}
export default Contact