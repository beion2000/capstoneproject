import React from "react";
import { Link } from "react-router-dom";

export const MyRides = () => {
  const css = `
  .footer-section-child {
    position: absolute;
    top: 0;
    left: -126px;
    background-color: #333;
    width: 1512px;
    height: 64px;
  }
  .unt-rides {
    position: absolute;
    top: 20px;
    left: 539px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 151px;
    height: 24px;
    color: white;
  }
  .background-image-icon,
  .footer-section {
    position: absolute;
    top: 1016px;
    left: 0;
    width: 1512px;
    height: 64px;
  }
  .background-image-icon {
    background-image: url("/Images/backgroundImage.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    top: -100px;
    left: -126px;
    height: 1116px;
    object-fit: cover;
    opacity: 0.9;
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
    left: 945px; /* Adjusted the left property */
    width: 162px;
    height: 47px;
  }
  
  .my-rides {
    position: absolute;
    top: 45px;
    left: 1088px; /* Adjusted the left property */
    width: 140px;
    height: 47px;
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
  .group-child {
    position: absolute;
    top: 3px;
    left: 0;
    background-color: var(--color-lightgray);
    width: 1106.9px;
    height: 60.1px;
  }
  .terminal,
  .destination,
  .departure,
  .seats,
  .time
 {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 7px;
    left: 75px;
    width: 128px;
    height: 52px;
  }

  .destination,
  .departure,
  .seats,
  .time {
    top: 7px;
    left: 325px;
    width: 128px;
    height: 52px;
  }
  .departure,
  .seats,
  .time {
    top: 7px;
    left: 575px;
    width: 128px;
    height: 52px;
  }
  .seats,
  .time {
    top: 7px;
    left: 825px;
    width: 128px;
    height: 52px;
  }
  .time {
    top: 7px;
    left: 1075px;
    width: 128px;
    height: 52px;
  }
  .rectangle-parent {
    position: absolute;
    top: 95px;
    left: 1.1px;
    width: 1256px;
    height: 63.1px;
    font-size: var(--font-size-xl);
    color: var(--color-black);
    background: grey;
  }
  
  .rectangles {
    top: 147px;
    left: 1.9px;
    height: 509px;
  }

  .dashboard-box {
    text-align: center;
    font-size: 16px;
    color: #fff;
    font-family: Inter;
    left: 0px;
    top: 40px;
  }
  
  /* css for frame */
  .myrides-box {
    flex: 1;
    padding: 0px;
    position: absolute;
    left: 0;
    top: 158px; /* Adjust the top value to move the frame lower */
    border-radius: 0px; /* Sharp edges */
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
  height: 50px; /* Set your desired height for the rectangle boxes */
  border: 1px solid #000;
  margin-bottom: 10px; /* Set the margin between rectangle boxes */
}

/* Optional: Add hover effect to the rectangles */
.data-box:hover {
  background-color: #f0f0f0;
}
.mask-group {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  font-size: 16px;
  color: #fff;
  top: 100px;
  left: -630px;
  font-family: Inter;
}

.dashboard-create-ride-offer{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  font-size: 16px;
  color: #000; /* You can change the color according to your design */
  font-family: Inter;
  left: 50%;
}


  `;
  
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const createRectangles = (count) => {
    const rectangles = [];
    for (let i = 0; i < count; i++) {
      const color = i % 2 === 0 ? "#ccc" : "#ddd"; // Alternating shades of grey
      rectangles.push(
        <div className="data-box" style={{ backgroundColor: color }}>
          {/* Your rectangle content goes here */}
        </div>
      );
    }
    return rectangles;
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
            <div className="rectangle-parent">
              <div className="group-child"></div>
              <b className="time">Time</b>
              <b className="seats">Seats</b>
              <b className="departure">Departure</b>
              <b className="destination">Destination</b>
              <b className="terminal">Terminal</b>
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
    </div>
  );
  };
  

export default MyRides;
