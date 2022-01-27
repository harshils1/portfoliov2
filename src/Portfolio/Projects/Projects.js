import React, {useState} from "react";
import "./Projects.css";
import { Card, Button } from "react-bootstrap";

export default function Projects() {
  const cardInfo = [
    {
      image: ""/*"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png"*/,
      title: "Self-Solving Sudoku",
      text: "Java",
      link: "https://github.com/harshils1/Sudoku",
      className: "1"
    },
    {
      image: ""/*"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/8a/d44cb0e61c11e58ef2e3befd7c195d/websiteweekend.png?auto=format%2Ccompress&dpr=1"*/,
      title: "Portfolio Web Application",
      text: "React",
      link: "https://github.com/harshils1/portfoliov2",
      className: "id2"
    },
    {
      image: ""/*"https://www.acurite.com/media/catalog/product/cache/c1e9ab0486932534a7d741d10c346ab0/0/1/01535--hi-res_2021.jpg"*/,
      title: "IoT Weather Station",
      text: "Arduino",
      link: "https://github.com/harshils1/IoT-Weather-Station",
      className: "3"
    },
  ];

  const cardInfo2 = [
    {
      title: "Project X",
      text: "Coming Soon...",
      link: "https://github.com/harshils1/",
    },
    {
      title: "Project Y",
      text: "Coming Soon...",
      link: "https://github.com/harshils1/",
    },
    {
      title: "Project Z",
      text: "Coming Soon...",
      link: "https://github.com/harshils1/",
    },
  ];


  const renderCard = (card) => {
    return (
      <Card style={{ width: "20rem" , background: "black", border: "2px solid white"}} className='card' >
        <Card.Body>
          <Card.Title style={{color: "white"}}>{card.title}</Card.Title>
          <Card.Text style={{color: "white"}}>{card.text}</Card.Text>
          <Button variant="primary" className="card-button"><a className="btn-ins" target='__blank' href={card.link} style={{color: "white", decoration: "none"}}>View Here</a></Button>
        </Card.Body>
      </Card>
    );
  };

  const [version, setVersion] = useState(cardInfo.map(renderCard));
  const [verify, setVerify] = useState(false);


  return (
    <div className="project-container">
      <div className="project-parent">
        <div className="project-details">
            <div>
                <h1 style={{color: 'white'}} className={verify ? "up" : "up-active"} onClick={() => (setVersion(cardInfo.map(renderCard)), setVerify(false))}>▲</h1>
            </div>
            {version}
            <div>
                <h1 style={{color: 'white'}} className={verify ? "down-active" : "down"} onClick={() => (setVersion(cardInfo2.map(renderCard)), setVerify(true))}>▼</h1>
            </div>
        </div>
      </div>
    </div>
  );
}
