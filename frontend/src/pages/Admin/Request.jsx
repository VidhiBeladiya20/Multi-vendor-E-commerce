import { useEffect, useState } from "react";
import Modal from 'react-modal';
import "../../../public/assets/css/admin.css";


const Request = () => {

  const [request, setRequest] = useState([]);
  const [details, setDetails] = useState(false);
  const [name, setName] = useState("");

  const getRequest = async () => {
    const response = await fetch("http://localhost:5000/admin/getRequest", {
      method: "GET",

    })
    if (response.ok) {
      const data = await response.json();
      const res_data = data.message;
      // console.log(res_data);
      setRequest(res_data);
    } else {
      console.log("data not found from request page");
    }
  }
  useEffect(() => {
    getRequest();
  }, [])

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (value) => {
    setSelectedRequest(value);
    setShowModal(true);

  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <div className="col-md-12 col-sm-12 mt-3">
        <table id="data" className="table table-hover">
          <thead id="thead">
            <tr>
              <th scope="col" className="text-center">Details</th>
              <th scope="col" className="text-center">Name</th>
              <th scope="col" className="text-center">Email</th>
              <th scope="col" className="text-center">Category</th>
              <th scope="col" className="text-center">Title</th>
              <th scope="col" className="text-center">Approved</th>
              <th scope="col" className="text-center">Declined</th>
            </tr>
          </thead>
          <tbody>
            {
              request.map((value) => {
                const { username, email, category, title, status } = value;
                // return (
                //   <>
                  // <tr key={value.id}>
                  //   <td className="text-center" style={{cursor:"pointer"}}>^</td>
                  //   <td className="text-center">{username}</td>
                  //   <td className="text-center">{email}</td>
                  //   <td className="text-center">{category}</td>
                  //   <td className="text-center">{title}</td>
                  //   <td className="text-center text-success" style={{cursor:"pointer"}}>Approve</td>
                  //   <td className="text-center text-danger" style={{cursor:"pointer"}}>{status}</td><br />
                  // </tr>
                  // </>                 
                // )

                return (
                  <div>
                    {/* Display record content */}
                    <tr key={value.id}>
                      <td className="text-center" style={{cursor:"pointer"}}>^</td>
                      <td className="text-center">{username}</td>
                      <td className="text-center">{email}</td>
                      <td className="text-center">{category}</td>
                      <td className="text-center">{title}</td>
                      <td className="text-center text-success" style={{cursor:"pointer"}}>Approve</td>
                      <td className="text-center text-danger" style={{cursor:"pointer"}}>{status}</td><br />
                    </tr>
                    {/* <p>{record.name}</p> */}

                    {/* Button to open modal */}
                    <button onClick={()=>openModal(value)}>Open Modal</button>
                    {/* <button onClick={openModal}>Open Modal</button> */}

                    {/* Modal */}
                    {showModal && (
                      <div className="modal" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">{selectedRequest.username}</h5>
                              {/* <h5 className="modal-title">{record.name} Details</h5> */}
                              <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                              {/* Display record details */}
                              <p>{selectedRequest.email}</p>
                              {/* <p>{record.description}</p> */}
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })

            }

          </tbody>
        </table>

      </div>
    </>
  )
}
export default Request;
