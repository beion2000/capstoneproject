import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, query, onSnapshot, addDoc, doc, getDocs} from "firebase/firestore";
import { db, auth } from "../firebase"; // Import Firebase authentication and database


export const AvailableRides = () => {
  const css = `
  .mask-group {
    position: relative;
    width: 100%;
    height: 1080px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    font-family: Inter;
  }
  .dashboard-box {
    position: relative;
    text-align: center;
    font-size: 16px;
    color: #fff;
    font-family: Inter;
    left: 125px;
    top: 120px;
  }
  
  .background-image-icon {
    position: absolute;
    top: 0;
    width: 1512px;
    height: 100%;
    left: 0px;
    object-fit: cover;
    background-image: url("/Images/backgroundImage.png");
    background-size: cover;
    background-position: center;
    opacity: 0.9;
  }
  
  .footer-section-child {
    position: absolute;
    top: 0;
    left: 0px;
    background-color: #333;
    width: 1512px;
    height: 64px;
  }
  
  .unt-rides {
    position: absolute;
    top: 20px;
    left: 659px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 151px;
    height: 24px;
  }
  
  .footer-section {
    position: absolute;
    top: 1016px;
    left: 0;
    width: 1440px;
    height: 64px;
  }
  
  .dashboard-user-interaction {
    position: absolute;
    top: 1.09px;
    left: 0;
    border-radius: 10px;
    background-color: #e2e2e2;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #000;
    box-sizing: border-box;
    width: 1257px;
    height: 715.91px;
  }
  
  .mini-nav-border {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px 10px 0 0;
    background-color: #333;
    width: 1257px;
    height: 95.09px;
  }
  
  .available-rides,
  .create-ride-offer,
  .my-rides {
    position: absolute;
    top: 45px;
    left: 802px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 137px;
    height: 47px;
    background: transparent;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    white-space: nowrap;
  }
  
  .create-ride-offer {
    position: absolute;
    top: 45px;
    left: 945px;
    width: 162px;
    height: 47px;
  }
  
  .my-rides {
    position: absolute;
    top: 45px;
    left: 1088px;
    width: 140px;
    height: 47px;
  }
  
  .search-bar {
    position: absolute;
    top: 29.51px;
    left: 29.63px;
    width: 250.77px;
    height: 37.16px;
    text-align: center;
    font-size: 16px;
    color: #7e7e7e;
  }
  
  .search-bar-child {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    background-color: #d9d9d9;
    width: 250.77px;
    height: 37.16px;
  }
  
  .search-rides {
    position: absolute;
    top: -5.0px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 250.14px;
    height: 30.88px;
    background-color: transparent;
  }
  .rectangle-parent {
    position: relative;
    top: 95px;
    left: 0px; /* Adjust the left property as needed */
    width: 1257px; /* Adjust the width as needed */
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: grey; /* Set the background color to grey */
    z-index: 1; /* Set a z-index value for the .rectangle-parent */
  }
  
  .name,
  .terminal,
  .destination,
  .departure-time,
  .available-seats {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px; /* Adjust the width as needed */
    height: 52px;
    z-index: 2; /* Set a higher z-index value for the child elements to make them appear over .rectangle-parent */
    top: 5px;
  }
  
  .name {
    left: 50px; /* Adjust the left property as needed */
  }
  
  .terminal {
    left: 250px; /* Adjust the left property as needed */
  }
  
  .destination {
    left: 450px; /* Adjust the left property as needed */
  }
  
  .departure-time {
    left: 650px; /* Adjust the left property as needed */
  }
  
  .available-seats {
    left: 850px; /* Adjust the left property as needed */
  }
  
  
  .myrides-box {
    flex: 1;
    padding: 0px;
    position: absolute;
    left: 0;
    top: 158px;
    border-radius: 0px;
    background-color: white;
    box-sizing: border-box;
    width: 1257px;
    height: 680px;
  }
  
  .scroll-frame {
    width: 100%;
    height: 685px;
    overflow-y: auto;
    border: 1px solid #ccc;
  }
  
  .data-box {
    width: 100%;
    height: 50px;
    border: 1px solid #000;
    margin-bottom: 10px;
  }
  
  .data-box:hover {
    background-color: #f0f0f0;
  }
  
  .rectangles {
    position: absolute;
    top: 260px;
    left: 0;
    width: 100%;
    height: 440px;
  }
  
  .rectangles-child {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ccc;
    width: 125.92px;
    height: 100px;
  }
  
  .rectangles-item {
    position: absolute;
    top: 0;
    left: 143.08px;
    background-color: #ddd;
    width: 125.92px;
    height: 100px;
  }
  
  .accept-ride {
    position: absolute;
    top: 40px;
    left: 77.96px;
    font-size: 18px;
    color: #fff;
  }
  
  .rectangles-inner {
    position: absolute;
    top: 120px;
  }

  .data-box {
  width: 100%;
  height: 50px;
  border: 1px solid #000;
  margin-bottom: 10px;
  background-color: #333; /* Background color for better contrast */
  color: white; /* Text color */
  position: relative;
}

.data-set {
  display: flex;
  flex-direction: row; /* Arrange data items horizontally */
  flex-wrap: nowrap; /* Prevent wrapping to the next line */
  align-items: center;
  justify-content: space-between;
  width: 100%; /* Expand to fill the available width */
}

.data-item {
  flex: 1; /* Distribute available space equally among data items */
  margin: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.label {
  font-weight: bold;
}

.value {
  margin-top: 5px;
}
  
`;

const [rideRequests, setRideRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        const rideRequestsRef = collection(db, 'users', uid, 'rideRequests');
        const rideRequestsQuery = query(rideRequestsRef);
        const snapshot = await getDocs(rideRequestsQuery);
        const requestsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRideRequests(requestsData);
      }
    };

    fetchData();
  }, []);

  const createRectangles = () => {
    return rideRequests.map((request) => {
      return (
        <div className="data-box" key={request.id}>
          <div className="data-set">
            <div className="data-item">
              <div className="value">{request.terminal}</div>
            </div>
            <div className="data-item">
              <div className="value">{request.destination}</div>
            </div>
            <div className="data-item">
              <div className="value">{request.date}</div>
            </div>
            <div className="data-item">
              <div className="value">{request.availableSeats}</div>
            </div>
            <div className="data-item">
              <div className="value">{request.time}</div>
            </div>
          </div>
          <div className="data-item">
            <button className="accept-ride" onClick={() => acceptRide(request.id)}>
              Accept Ride
            </button>
          </div>
        </div>
      );
    });
  };

 const acceptRide = (offerId) => {
    console.log(`Accepting Ride: ${offerId}`);
  };

return (
  <div className="mask-group">
  <style>{css}</style>
  <img className="background-image-icon" alt="" />
  <div className="dashboard-create-ride-offer">
    <div className="footer-section">
      <div className="footer-section-child"></div>
      <b className="unt-rides">© 2023 UNT Rides</b>
    </div>
    <div className="dashboard-box">
      <div className="dashboard-border">
        <div className="dashboard-user-interaction"></div>
        <div className="mini-nav-border"></div>
        <Link to="/AvailableRides">
          <button className="available-rides">Available Rides</button>
        </Link>
        <Link to="/RequestRide">
          <button className="create-ride-offer">Create Ride Offer</button>
        </Link>
        <Link to="/MyRides">
          <button className="my-rides">My Rides</button>
        </Link>
        <div className="search-bar">
          <div className="search-bar-child"></div>
          <input type="text" className="search-rides" placeholder="Search Rides" />
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="group-child" />
        <b className="available-seats">Available Seats</b>
        <b className="departure-time">Departure Time</b>
        <b className="destination">Destination</b>
        <b className="terminal">Origin</b>
        <b className="name">Name</b>
      </div>
      <div className="myrides-box">
        <div className="scroll-frame">
          <div className="data-container" id="data-container">
            {createRectangles(50)} {/* Adjust the count as needed */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

);
};
      

export default AvailableRides;
