import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Create() {
  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      number: "",
      age: ''

    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3000/create-user", values);
        Navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className='container' style={{ marginTop: '10%',width:"25%" }}>
      <div className='row'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col sm-6'>
              <label>Name</label>
              <input type="text" name="name"
              onChange={formik.handleChange}
              value={formik.values.name} 
              className='form-control' required />
            </div>
          </div>
          <div className='row'>
            <div className='col sm-6'>
              <label>Number</label>
              <input type="number" name="number" 
              onChange={formik.handleChange}
              value={formik.values.number}
              className='form-control' required />
            </div>
          </div>
          <div className='row'>
            <div className='col sm-6'>
              <label>Age</label>
              <input type="number" name="age" 
              onChange={formik.handleChange}
              value={formik.values.age}
              className='form-control' required />
            </div>
          </div>
          <div className='row'>
            <div className='col sm-6'>
              <label>email</label>
              <input type="text" name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className='form-control' required />
            </div>
          </div>
          <center>
          <button className='btn btn-primary' style={{marginTop:'5%'}}>
            Submit
          </button></center>
        </form>
      </div>
    </div>
  )
}


export default Create