import { useState } from 'react'; 
import Button from './Button';
 
// Starting values used when the form is creating a new student. 
const emptyStudent = { name: '', email: '', course: '', year: '1st Year' }; 
 
export default function StudentForm({ student, onSave }) { 
  // Editing starts with the existing details; adding starts with blank fields. 
  const [formData, setFormData] = useState(student || emptyStudent); 
 
  function handleChange(event) { 
    // Update the form field whose input triggered this event. 
    const { name, value } = event.target; 
    setFormData({ ...formData, [name]: value }); 
  } 
 
  function handleSubmit(event) { 
    // Prevent a browser reload, then send the form values to the parent component. 
    event.preventDefault(); 
    onSave(formData); 
  } 
 
  return ( 
    <form className="student-form" onSubmit={handleSubmit}> 
      <label> 
        Full name 
        <input 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="e.g. Asha Kumar" 
          required 
        /> 
      </label> 
      <label> 
        Email address 
        <input 
          name="email" 
          type="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="asha@example.com" 
          required 
        /> 
      </label> 
      <label> 
        Course 
        <input 
          name="course" 
          value={formData.course} 
          onChange={handleChange} 
           placeholder="e.g. MCA" 
          required 
        /> 
      </label> 
      <label> 
        Year 
        <select name="year" value={formData.year} onChange={handleChange}> 
          <option>1st Year</option> 
          <option>2nd Year</option> 
          <option>3rd Year</option> 
        </select> 
      </label> 
      <div className="form-actions"> 
        <a className="button secondary-button" href="/students"> 
          Cancel 
        </a> 
        <Button
  text="Save student"
  type="submit"
/>
      </div> 
    </form> 
  ); 
} 