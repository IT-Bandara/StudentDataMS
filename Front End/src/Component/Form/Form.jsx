// import React, { useState } from 'react'

// function Form() {

//   const [inputData , setInputData] = useState({name:'', email:'', birthday:'', address:'', contactNo:'', gpa:''});
//   const {name, email, birthday, address, contactNo, gpa } = inputData;

//   const [nameError , setNameError] = useState();
//   const [emailError , setEmailError] = useState();
//   const [birthdayError , setBirthdayError] = useState();
//   const [addressError , setAddressError] = useState();
//   const [contactNoError , setContactNoError] = useState();
//   const [gpaError , setGpaError] = useState();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputData);

// }

//   const handleChange = (event) => {
//     setInputData({
//         ...inputData, [event.target.name]: event.target.value
//     }, 300)
// }

//   const validName = () => {
//     if(!name){
//       setNameError("Name is required!!");
//     }else{
//       setNameError('');
//     }
//   }

//   const validEmail = () => {
//     if(!email){
//       setEmailError("Email is required!!");
//     }else if(!/\S+@\S+\.\S+/.test(email)){
//       setEmailError("Invalid email address!!");
//     }
//     else{
//       setEmailError('');
//     }
//   }

//   const validBirthday = () => {
//     if(!birthday){
//       setBirthdayError("Birthday is required!!");
//     }else{
//       setBirthdayError('');
//     }
//   }

//   const validAddress = () => {
//     if(!address){
//       setAddressError("Address is required!!");
//     }else{
//       setAddressError('');
//     }
//   }

//   const validContactNo = () => {
//     if(!contactNo){
//       setContactNoError("Contact number is required!!");
//     }else if(contactNo.length != 10){
//       setContactNoError("Contact number is not correct!!");
//     }else{
//       setContactNoError('');
//     }
//   }

//   const validGpa = () => {
//     if(!gpa){
//       setGpaError("GPA is required!!");
//     } else if(gpa>4){
//       setGpaError("invalid GPA!!");
//     }else{
//       setGpaError('');
//     }
//   }

//   return (
//     <div>
//       <form  onSubmit={handleSubmit}>
//         <div className="content">
//             <div className="input-feeld">
//                 <label >Name</label>
//                 <input 
//                   type="text"
//                   onBlur={validName}
//                   onChange={handleChange}
//                 />
//             </div>
//             {nameError && <p className='error'>{nameError}</p>}

//             <div className="input-feeld">
//                 <label >Emai</label>
//                 <input 
//                   type="email" 
//                   onBlur={validEmail}
//                   onChange={handleChange}
//                 />
//             </div>
//             {emailError && <p className='error'>{emailError}</p>}

//             <div className="input-feeld">
//                 <label >Birth day</label>
//                 <input 
//                   type="date" 
//                   onBlur={validBirthday}
//                   onChange={handleChange}
//                 />
//             </div>
//             {birthdayError && <p className='error'>{birthdayError}</p>}

//             <div className="input-feeld">
//                 <label >Address</label>
//                 <input 
//                   type="text"
//                   onBlur={validAddress} 
//                   onChange={handleChange}
//                 />
//             </div>
//             {addressError && <p className='error'>{addressError}</p>}

//             <div className="input-feeld">
//                 <label >Cntact.No</label>
//                 <input 
//                   type="number" 
//                   onBlur={validContactNo}
//                   onChange={handleChange}
//                 />
//             </div>
//             {contactNoError && <p className='error'>{contactNoError}</p>}

//             <div className="input-feeld">
//                 <label >Current GPA</label>
//                 <input 
//                   type="number" 
//                   onBlur={validGpa}
//                   onChange={handleChange}
//                 />
//             </div>
//             {gpaError && <p className='error'>{gpaError}</p>}

//             <div className="btn">
//             <button type="submit" class="btn btn-info" >Update</button>
//             <button type="button" class="btn btn-info">Cansel</button>

//             </div>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Form


// import React, { useState } from 'react';
// import './Form.css'

// function Form(props) {
//   const [inputData, setInputData] = useState({
//     name: '',
//     email: '',
//     birthday: '',
//     address: '',
//     contactNo: '',
//     gpa: ''
//   });
//   const { name, email, birthday, address, contactNo, gpa } = inputData;

//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [birthdayError, setBirthdayError] = useState('');
//   const [addressError, setAddressError] = useState('');
//   const [contactNoError, setContactNoError] = useState('');
//   const [gpaError, setGpaError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // validateField(event.target.name, event.target.value);

//     if (!name || !email || !birthday || !address || !contactNo || !gpa) {
//       setNameError(name ? '' : 'Name is required!!');
//       setEmailError(email ? '' : 'Email is required!!');
//       setBirthdayError(birthday ? '' : 'Birthday is required!!');
//       setAddressError(address ? '' : 'Address is required!!');
//       setContactNoError(contactNo ? '' : 'Contact number is required!!');
//       setGpaError(gpa ? '' : 'GPA is required!!');
//       return; // Prevent form submission
//     }

//     if(validateField()){
//       console.log(inputData);

//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setInputData({
//       ...inputData,
//       [name]: value
//     },300);
//     validateField(name, value);
//   };

//   const validateField = (fieldName, value) => {
//     switch (fieldName) {
//       case 'name':
//         setNameError(value ? '' : 'Name is required!!');
//         break;
//       case 'email':
//         setEmailError(
//           value ? (/\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address!!') : 'Email is required!!'
//         );
//         break;
//       case 'birthday':
//         setBirthdayError(value ? '' : 'Birthday is required!!');
//         break;
//       case 'address':
//         setAddressError(value ? '' : 'Address is required!!');
//         break;
//       case 'contactNo':
//         setContactNoError(value ? (value.length === 10 ? '' : 'Contact number is not correct!!') : 'Contact number is required!!');
//         break;
//       case 'gpa':
//         setGpaError(value ? (value > 4 ? 'Invalid GPA!!' : '') : 'GPA is required!!');
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className='popup-overlay '>
//       <form onSubmit={handleSubmit}>
//         <div className="content">
//           <div className="input-feeld">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onBlur={() => validateField('name', name)}
//               onChange={handleChange}
//             />
//           </div>
//           {nameError && <p className="error">{nameError}</p>}

//           <div className="input-feeld">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onBlur={() => validateField('email', email)}
//               onChange={handleChange}
//             />
//           </div>
//           {emailError && <p className="error">{emailError}</p>}

//           <div className="input-feeld">
//             <label>Birth day</label>
//             <input
//               type="date"
//               name="birthday"
//               value={birthday}
//               onBlur={() => validateField('birthday', birthday)}
//               onChange={handleChange}
//             />
//           </div>
//           {birthdayError && <p className="error">{birthdayError}</p>}

//           <div className="input-feeld">
//             <label>Address</label>
//             <input
//               type="text"
//               name="address"
//               value={address}
//               onBlur={() => validateField('address', address)}
//               onChange={handleChange}
//             />
//           </div>
//           {addressError && <p className="error">{addressError}</p>}

//           <div className="input-feeld">
//             <label>Contact No</label>
//             <input
//               type="number"
//               name="contactNo"
//               value={contactNo}
//               onBlur={() => validateField('contactNo', contactNo)}
//               onChange={handleChange}
//             />
//           </div>
//           {contactNoError && <p className="error">{contactNoError}</p>}

//           <div className="input-feeld">
//             <label>Current GPA</label>
//             <input
//               type="number"
//               name="gpa"
//               value={gpa}
//               onBlur={() => validateField('gpa', gpa)}
//               onChange={handleChange}
//             />
//           </div>
//           {gpaError && <p className="error">{gpaError}</p>}

//           <div className="buttons">
//             <button type="submit" className="btn btn-info mx-1">
//               {props.name}
//             </button>
//             <button type="button" className="btn btn-info mx-1" onClick = {props.onClose}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Form;

// ------------------ updating validation format ---------------------

import React, { useState } from 'react';
import './Form.css'
import axios from 'axios';

function Form(props) {
  const [inputData, setInputData] = useState({
    name: props.student?.name || '',
    email: props.student?.email || '',
    birthDay: props.student?.birthDay || '',
    address: props.student?.address || '',
    contactNo: props.student?.contactNo || '',
    gpa: props.student?.gpa || '',
  });
  const { name, email, birthDay, address, contactNo, gpa } = inputData;

  const [error, setError] = useState({
    name: '',
    email: '',
    birthDay: '',
    address: '',
    contactNo: '',
    gpa: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value
    });

    setError({
      ...error,
      [name]: ''
    })
  };

  const validateField = () => {
    let valid = true;
    const newError = {
      name: name ? '' : 'Name is required!!',
      email: email ? (/\S+@\S+\.\S+/.test(email) ? '' : 'Invalid email address!!') : 'Email is required!!',
      birthDay: birthDay ? '' : 'Birthday is required!!',
      address: address ? '' : 'Address is required!!',
      contactNo: contactNo ? (contactNo.length === 10 ? '' : 'Contact number is not correct!!') : 'Contact number is required!!',
      gpa: gpa ? (gpa > 4 ? 'Invalid GPA!!' : '') : 'GPA is required!!'
    };

    setError(newError);

    Object.values(newError).forEach((error) => {
      if (error) {        // check for error !== null
        valid = false;
      }
    })
    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateField()) {

      // try {
      //   const response = await axios.post(
      //     props.name === "Add Student"
      //       ? 'http://localhost:8080/api/student/save'
      //       : 'http://localhost:8080/api/student/update',
      //       {
      //         "id" : props.student.id,
      //         "email" : email,
      //         "name" : name,
      //         "birthDay" : birthDay,
      //         "address" : address,
      //         "contactNo" : contactNo,
      //         "gpa" : gpa
      //   }
      //   );

      //   console.log(response.data);
      //   alert(props.name === "Add Student" ? 'Student saved successfully' : 'Student updated successfully');
      //   setInputData({
      //     name: '',
      //     email: '',
      //     birthDay: '',
      //     address: '',
      //     contactNo: '',
      //     gpa: ''
      //   });
      // } catch (err) {
      //   if (err.response && err.response.data && err.response.data.message) {
      //     // If the error response contains a message property, display it
      //     alert("Server Error: " + err.response.data.message);
      //   } else if (err.response && err.response.status) {
      //     // If there's no message property but the response contains a status code, display the status code
      //     alert("Server Error: " + err.response.status);
      //   } else {
      //     // If no specific error message is available, display a generic error message
      //     alert("Error: " + err.message);
      //   }
      // }

      if (props.name === "Add Student") {
        try {
          const response = await axios.post('http://localhost:8080/api/student/save',
            {
              "email": email,
              "name": name,
              "birthDay": birthDay,
              "address": address,
              "contactNo": contactNo,
              "gpa": gpa
            });

          console.log(response.data);
          alert('Student saved successfully');
          setInputData({
            name: '',
            email: '',
            birthday: '',
            address: '',
            contactNo: '',
            gpa: ''
          });

        } catch (err) {
          if (err.response && err.response.data && err.response.data.message) {
            // If the error response contains a message property, display it
            alert("Server Error: " + err.response.data.message);
          } else {
            // If no specific error message is available, display a generic error message
            alert("Error: " + err.message);
          }
        }
      } else {
        try {
          const response = await axios.post('http://localhost:8080/api/student/update', {
            "id": props.student.id,
            "email": email,
            "name": name,
            "birthDay": birthDay,
            "address": address,
            "contactNo": contactNo,
            "gpa": gpa
          });

          console.log(response.data);
          alert('Student update successfully');


        } catch (err) {
          if (err.response && err.response.data && err.response.data.message) {
            // If the error response contains a message property, display it
            alert("Server Error: " + err.response.data.message);
          } else if (err.response && err.response.status) {
            // If there's no message property but the response contains a status code, display the status code
            alert("Server Error: " + err.response.status);
          } else {
            // If no specific error message is available, display a generic error message
            alert("Error: " + err.message);
          }
        }
      }
    }
  };

  return (
    <div className='popup-overlay '>
      <form onSubmit={handleSubmit}>
        <div className="content">
          <div className="input-feeld">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          {error.name && <p className="error">{error.name}</p>}

          <div className="input-feeld">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          {error.email && <p className="error">{error.email}</p>}

          <div className="input-feeld">
            <label>Birth day</label>
            <input
              type="date"
              name="birthDay"
              value={birthDay}
              onChange={handleChange}
            />
          </div>
          {error.birthDay && <p className="error">{error.birthDay}</p>}

          <div className="input-feeld">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
            />
          </div>
          {error.address && <p className="error">{error.address}</p>}

          <div className="input-feeld">
            <label>Contact No</label>
            <input
              type="number"
              name="contactNo"
              value={contactNo}
              onChange={handleChange}
            />
          </div>
          {error.contactNo && <p className="error">{error.contactNo}</p>}

          <div className="input-feeld">
            <label>Current GPA</label>
            <input
              type="number"
              name="gpa"
              value={gpa}
              onChange={handleChange}
            />
          </div>
          {error.gpa && <p className="error">{error.gpa}</p>}

          <div className="buttons">
            <button type="submit" className="btn btn-info mx-1">
              {props.name}
            </button>
            <button type="button" className="btn btn-info mx-1" onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
