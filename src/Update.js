import axios from 'axios';
import React, { useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
function Update() {
  let params = useParams();

  useEffect(() => {
   return async ()=>{
      try {
        let user = await axios.get(`http://localhost:3000/user/${params.id}`);
        console.log(params)
        formik.setValues(user.data);
      } catch (error) {
        console.log(error);
      }
  }
  }, []);

  

  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      number: "",
      age: ''
    },
    onSubmit: async (values) => {
      delete values._id
      try {
        await axios.put(`http://localhost:3000/user/${params.id}`, values); 
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
            Update
          </button></center>
        </form>
      </div>
    </div>
  )
}

export default Update