import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { Icon, Line, PartDesc, PartTitle, Span, WorkPart, WorkSection,WorkTitle } from "./style";
function Work() {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    axios
      .get("data/Data.json")
      .then((response) => setWorks(response.data.works))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);  
  return (
    <WorkSection className="work">
      <div className="container">
        <WorkTitle>
          <Span>My</Span> Work
        </WorkTitle>
        {works.map((item, key) => (
          <WorkPart $first={item.id} key={item.id}>
            <Icon className={item.icon_name}></Icon>
            <PartTitle className="part-title">{item.title}</PartTitle>
            <Line className="line" />
            <PartDesc className="part-desc">{item.body}</PartDesc>
          </WorkPart>
        ))}
      </div>
    </WorkSection>
  );
}

export default Work;