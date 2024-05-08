import React, { useState } from 'react';
import Form from '../Form/Form';
import axios from 'axios';

function Head({ setFilteredStudents }) {

  const [isFormVisible, setFormVisible] = useState(false);
  const [searchName , setSearchName] = useState('');

  // Function to toggle the visibility of the form
  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const closePopUp = () => {
    setFormVisible(false);
};

const search = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.get(`http://localhost:8080/api/student/search/${searchName}`);
    setFilteredStudents(response.data.content); 
    if (response.data.content.length === 0) {
      alert(`The student "${searchName}" is not found`);
    }
  } catch (error) {
    console.error('Error searching students:', error);
  }
};


  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h3 >STUDENT DATA</h3>

          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

          <form className="d-flex" role="search" onSubmit={search}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search By Name"
                aria-label="Search"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <ul class="navbar-nav  justify-content-center ">
              <li class="nav-item">
                {/* <a class="nav-link active " aria-current="page" href="#" style={{ marginRight: '15px', fontSize: '1.2rem' }}>ADD</a> */}
                <button type="button" class="btn btn-primary" style={{ marginLeft: '20px', fontSize: '1.2rem' }} onClick={toggleForm}>
                  Add Student
                </button>
                {isFormVisible && <Form  onClose = {closePopUp}  name='Add Student' student = ""/>}
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Head;
