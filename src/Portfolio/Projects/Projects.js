import React, {useState} from "react";
import "./Projects.css";
import { Card, Button } from "react-bootstrap";

export default function Projects() {
  const cardInfo = [
    {
      title: "Self-Solving Sudoku",
      text: "Java",
      link: "https://github.com/harshils1/Sudoku",
    },
    {
      title: "Portfolio Web Application",
      text: "React",
      link: "https://github.com/harshils1/portfoliov2",
    },
    {
      title: "IoT Weather Station",
      text: "Arduino",
      link: "https://github.com/harshils1/IoT-Weather-Station",
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
