import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import axios from 'axios';

function Body({ filteredStudents }) {

    const [student, setStudent] = useState([]);
    const [openForms, setOpenForms] = useState({});
    const [selectStudent, setSelectStudent] = useState();
    const [showAlert, setShowAlert] = useState({});

    useEffect(() => {

        const fetchStudent = async () => {
            try {
                const responce = await axios.get('http://localhost:8080/api/student/allStudent');
                if (responce.data.code === '00') {
                    setStudent(responce.data.content)
                }
            } catch (error) {
                console.error('Error fetching Students:', error);
            }
        };

        fetchStudent();

          // Polling to fetch updated students data every 5 seconds
          const pollingInterval = setInterval(fetchStudent, 5000);

          // Cleanup the interval when component unmounts
          return () => clearInterval(pollingInterval);

    }, []);


    const openPopUp = (selectStudent) => {
        setOpenForms(prevState => ({
            ...prevState,
            [selectStudent.id]: true
        }));
        setSelectStudent(selectStudent);
    };

    const closePopUp = (studentid) => {
        setOpenForms(prevState => ({
            ...prevState,
            [studentid]: false
        }));
        setSelectStudent(null);
    };

    const openAlert = (selectStudent) => {
        setSelectStudent(selectStudent);
        setShowAlert((prevAlerts) => ({
            ...prevAlerts,
            [selectStudent.id]: true,
        }));
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/student/delete/${selectStudent.id}`);
            console.log(selectStudent.name);
        } catch (err) {
            if (err.response && err.response.status) {
                alert("Server Error: " + err.response.status);
            } else {
                alert("Error: " + err.message);
            }
        }

        handleCloseAlert();
    }

    const handleCloseAlert = () => {
        setShowAlert((prevAlerts) => ({
            ...prevAlerts,
            [selectStudent.id]: false,
        }));
        setSelectStudent(null);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table className="table table-striped border mt-5 mx-5">
                <thead>
                    <tr>
                        <th scope="col">Count</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Birthday</th>
                        <th scope="col">Address</th>
                        <th scope="col">Cntact.No</th>
                        <th scope="col">GPA</th>
                        <th scope="col">Edit</th>

                    </tr>
                </thead>
                <tbody>

                    {(filteredStudents.length > 0 ? filteredStudents : student).map((student, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.birthDay}</td>
                            <td>{student.address}</td>
                            <td>{student.contactNo}</td>
                            <td>{student.gpa}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-warning mx-2"
                                    style={{ fontSize: "13px", padding: '3px' }}
                                    onClick={() => openPopUp(student)}>
                                    Update
                                </button>
                                {openForms[student.id] && <Form onClose={() => closePopUp(student.id)} name='Update' student={selectStudent} />}


                                <button
                                    type="button"
                                    className="btn btn-danger mx-2 "
                                    style={{ fontSize: "13px", padding: '3px' }}
                                    onClick={() => openAlert(student)}>
                                    Delete
                                </button>

                                {showAlert[student.id] && (
                                    <div
                                        style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '1000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}                                            >
                                        <div className="alert alert-danger" role="alert"
                                            style={{ zIndex: '1001', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                            Are you sure, you want to delete this student ({student.name})?
                                            <br />

                                            <div style={{ textAlign: 'right' }}>
                                                <button onClick={handleDelete} className="btn btn-danger mx-2">Yes</button>
                                                <button onClick={handleCloseAlert} className="btn btn-secondary">No</button>
                                            </div>

                                        </div>
                                    </div>
                                )}

                            </td>
                        </tr>
                    ))}

                    {/*    <tr>
                        <td>1</td>
                        <td>Isuru</td>
                        <td>isurutharakabandara@gmail.com</td>
                        <td>1998/10/21</td>
                        <td>507/4,Alupoth,Kaluthara</td>
                        <td>0776594937</td>
                        <td>3.355</td>
                        <td>
                            <button type="button" className="btn btn-warning mx-2" style={{ fontSize: "13px", padding: '3px' }} onClick={openPopUp}>
                                Update
                            </button>
                            {isFormVisible && <Form onClose={closePopUp} name='Update' />}
                            <button type="button" className="btn btn-danger mx-2 " style={{ fontSize: "13px", padding: '3px' }}>
                                Delete
                            </button>

                        </td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Isuru</td>
                        <td>abandara@gmail.com</td>
                        <td>1998/10/21</td>
                        <td>507/4,Alupoth,Collombo</td>
                        <td>0776594737</td>
                        <td>3.355</td>
                        <td>
                            <button type="button" className="btn btn-warning mx-2 " style={{ fontSize: "13px", padding: '3px' }} >
                                Delete
                            </button>

                            <button type="button" className="btn btn-danger mx-0" style={{ fontSize: "13px", padding: '3px' }}>
                                Update
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Isuru</td>
                        <td>isururakabandara@gmail.com</td>
                        <td>1998/10/21</td>
                        <td>507/4,Alupoth,Kandy</td>
                        <td>0776594097</td>
                        <td>3.355</td>
                        <td>
                            <button type="button" className="btn btn-warning mx-2 " style={{ fontSize: "13px", padding: '3px' }}>
                                Delete
                            </button>
                            <button type="button" className="btn btn-danger mx-0" style={{ fontSize: "13px", padding: '3px' }}>
                                Update
                            </button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}

export default Body;
