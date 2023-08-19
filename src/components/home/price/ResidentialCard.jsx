import React, { useState } from 'react';
import { price } from "../../data/Data"
import './price.css';
import MyModal from "./Modal";

const ResidentialCard = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const mainModal = (
    <MyModal closeModal={closeModal}>
     <div className=" allform">
      <div className='contactheading'>See Our Rate <br></br> Book the Services </div >
      <form>
      <input type="text" placeholder="Name" />
      <input type="tel" placeholder="Phone" />
      <input placeholder="Problem"></input>
      <input type="text" placeholder="Address" />
      <button type="submit">Submit</button>
      <button className="model-btn" onClick={closeModal}>
      Close
    </button>
    </form>
    </div>
    </MyModal>
  );
  return (
    <>
      <div className='content flex mtop'>
        {price.map((item, index) => (
          <div className='box shadow' key={index}>
            <div className='topbtn'>
              <button className='btn3'>{item.best}</button>
            </div>
            <h3>{item.plan}</h3>
            <h1>
            Rs. {item.price}
            </h1>
            <ul>
              {item.list.map((val) => {
                const { icon, text, change } = val
                return (
                  <li>
                    <label
                      style={{
                        background: change === "color" ? "#dc35451f" : "#27ae601f",
                        color: change === "color" ? "#dc3848" : "#27ae60",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                )
              })}
            </ul>
            <button className="model-btn" onClick={() => setShowModal(true)}>
        Book Now
      </button>
      {showModal && mainModal}
          </div>
        ))}
      </div>

      
    </>
  )
}

export default ResidentialCard