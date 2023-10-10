import React from "react";
import "../RequestRide.css";

export const RequestRide = () => {
  return (
    <div className="dashboard-create-ride-offer">
      <div className="footer-section">
        <div className="footer-section-child" />
        <b className="unt-rides">© 2023 UNT Rides</b>
      </div>
      <img
        className="background-image-icon"
        alt=""
        src="/images/backgroundImage.png"
      />
      <div className="dashboard-box">
        <div className="dashboard-border">
          <div className="dashboard-user-interaction" />
          <div className="mini-nav-border" />
          <div className="available-rides-create-container">
            <span className="available-rides-create-container1">
              <button className="available-rides">Available Rides</button>
              <button className="create-ride-offer">Create Ride Offer</button>
              <button className="my-rides">My Rides</button>
            </span>
          </div>
          <div className="search-bar">
            <div className="search-bar-child" />
            <b className="search-rides">Search rides</b>
          </div>
        </div>
        <div className="form-fields-create-ride-offe">
          <div className="form-fields-create-ride-offe-child" />
          <div className="form-fields-create-ride-offe-item" />
          <div className="form-fields-create-ride-offe-inner" />
          <div className="rectangle-div" />
          <div className="form-fields-create-ride-offe-child1" />
          <div className="form-fields-create-ride-offe-child2" />
          <input
            className="available-seats"
            type="text"
            placeholder="Available seats"
          />
          <input className="date" type="text" placeholder="mm/dd/yyyy" />
          <input
            className="destination"
            type="text"
            placeholder="Destination"
          />
          <input className="terminal" type="text" placeholder="Terminal" />
          <input className="name" type="text" placeholder="Name" />
        </div>
      </div>
      <button className="submit-ride-offer">Submit Ride Offer</button>
    </div>
  );
};

export default RequestRide;
