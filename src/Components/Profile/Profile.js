import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
function Profile() {
  const [item, setItem] = useState([]);
  useEffect(() => {
  axios
    .get("data/Data.json")
    .then((response) => setItem(response.data.profile))
    .catch((error) => console.error("Error fetching data:", error));
  }, [])
  console.log(item);
  return (
    <div className="profile_skills">
      <div className="container">
        <div className="profile">
          <h2 className="profile-title">
            <span>My </span>Profile
          </h2>
          <ul className="profile-list">
            <li className="profile-item">
              <span>Name</span>
              Hamza Nabil
            </li>
            <li className="profile-item">
              <span>Birthday</span>
              21/1/1996
            </li>
            <li className="profile-item">
              <span>Address</span>
              Ain shams
            </li>
            <li className="profile-item">
              <span>Phone</span>
              4444 5555 6666
            </li>
            <li className="profile-item">
              <span>Email</span>
              hamza@hamza.com
            </li>
            <li className="profile-item">
              <span>Website</span>
              <span className="web">www.google.com</span>
            </li>
          </ul>
        </div>

        <div className="skills">
          <h2 className="skills-title">
            Some <span>skills</span>
          </h2>
          <p className="skills-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </p>
          {item.map((item) => (
            <div className="bar" key={item.id}>
              <span className="title">{item.skill}</span>
              <span className="perc">{item.percantage}</span>
              <div className="parent">
                <span className={item.class}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile