import React from 'react';

function Body() {



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
                    <tr>
                        <td>1</td>
                        <td>Isuru</td>
                        <td>isurutharakabandara@gmail.com</td>
                        <td>1998/10/21</td>
                        <td>507/4,Alupoth,Kaluthara</td>
                        <td>0776594937</td>
                        <td>3.355</td>
                        <td>
                            <button type="button" className="btn btn-warning mx-2 " style={{ fontSize: "13px", padding: '3px' }}>
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
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Body;
