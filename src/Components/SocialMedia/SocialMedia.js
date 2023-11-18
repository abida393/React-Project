import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
function SocialMedia() {
  const [social, setSocial] = useState([]);
  useEffect(() => {
 axios
   .get("data/Data.json")
   .then((response) => setSocial(response.data.social))
   .catch((error) => console.error("Error fetching data:", error));
  },[])
  return (
    <div class="social-media">
      {social.map(social => (
        <div class={social.class}>
        <i class={social.icon}></i>
        <p>
            <span class="info1">{social.title}</span>
          <span class="info2">{social.body}</span>
        </p>
      </div>
      ))}
      
    </div>
  );
}

export default SocialMedia;