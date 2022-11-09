import React, { useState } from 'react';
import * as Yup from "yup";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Formik } from 'formik';

const AddMusic = () => {

    const [selImage, setSelImage] = useState("");
    const [selFile, setSelFile] = useState("");

    const userSubmit = async (formdata, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        formdata.image = selImage;
        formdata.file = selFile;
        // setTimeout(() => {

        console.log(formdata);
    
        // for sending request to backend
        // 1. url
        // 2. request method
        // 3. data
        // 4. data format - json
        
        // returns promise
        const response = await fetch('http://localhost:5000/music/add', {
          method: 'POST',
          body: JSON.stringify(formdata),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        // reading response status
        console.log(response.status);
    
        if (response.status === 200) {
    
          Swal.fire({
            icon: 'success',
            title: 'Registered',
            text: 'User registered successfully'
          })
        }
    
        setSubmitting(false)
        resetForm()
        // }, 2000)
      }

      const uploadImage = (e) => {
        const file = e.target.files[0];
        setSelImage(file.name)
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile", {
          method: "POST",
          body: fd,
        }).then((res) => {
          if (res.status === 200) {
            // toast.success("Image Uploaded!!", {
            //   style: {
            //     borderRadius: "10px",
            //     background: "#333",
            //     color: "#fff",
            //   },
            // });
          }
        });
      }

      const uploadFile = (e) => {
        const file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile", {
          method: "POST",
          body: fd,
        }).then((res) => {
          if (res.status === 200) {
            // toast.success("Image Uploaded!!", {
            //   style: {
            //     borderRadius: "10px",
            //     background: "#333",
            //     color: "#fff",
            //   },
            // });
          }
        });
      };
    
      const myValidation = Yup.object().shape({
        username: Yup.string().min(3, "Too short").max(10, "Too Long").required("Username Required"),
      })
    
      return (
        <motion.div
          initial={{ scale: 0.6, x: "800%", opacity: 0 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="col-md-6 mx-auto pt-5">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">Signup Here</h3>
              <Formik initialValues={{ title: "", genre: "", image: "", file: "", year: 0, artist: "", createdAt: new Date()  }} onSubmit={userSubmit} 
            //   validationSchema={myValidation}
              >
                {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
                  <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input type="text" className="form-control" name="title" value={values.title} onChange={handleChange} />
                    
    
                    <label>Genre</label>
                    <input type="text" className="form-control" name="genre" value={values.genre} onChange={handleChange} />
    
                    <label>Year</label>
                    <input type="number" className="form-control" name="year" value={values.year} onChange={handleChange} />
                    <label>Artist</label>
                    <input type="text" className="form-control" name="artist" value={values.artist} onChange={handleChange} />

                    <label>Uploade Image</label>
                    <input type="file" onChange={uploadImage} />

                    <label>Uploade File</label>
                    <input type="file" onChange={uploadFile} />
    
                    <button disabled={isSubmitting} type="submit" className="btn btn-primary mt-5">
                      {isSubmitting ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ""}
                      &nbsp;&nbsp;Submit
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </motion.div>
      )
}

export default AddMusic