import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import axios from 'axios';

function Body() {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const openPopUp = () => {
        setIsFormVisible(!isFormVisible);
    };

    const closePopUp = () => {
        setIsFormVisible(false);
    };

    //----------------------------------

    const [student , setStudent] = useState([]);

    const fetchStudent = async () => {
        try{
            const responce = await axios.get('http://localhost:8080/api/student/allStudent');
            if(responce.data.code === '00'){
                setStudent(responce.data.content)
            }
        }catch(error){
            console.error('Error fetching Students:', error);
        }
    };

    useEffect(() => {
        fetchStudent();
    },[]);


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

                    {student.map(student => (
                        <tr>
                            <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.birthDay}</td>
                        <td>{student.address}</td>
                        <td>{student.contactNo}</td>
                        <td>{student.gpa}</td>
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
                    ))}
                    {/* <tr>
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
