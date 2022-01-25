import React from "react";
import "./Projects.css";
import { Card, Button } from "react-bootstrap";

export default function Projects() {
  const cardInfo = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png",
      title: "Self-Solving Sudoku",
      text: "Coming Soon",
      link: "https://github.com/harshils1/Sudoku"
    },
    {
      image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/8a/d44cb0e61c11e58ef2e3befd7c195d/websiteweekend.png?auto=format%2Ccompress&dpr=1",
      title: "Portfolio Web Application",
      text: "Coming Soon",
      link: "https://github.com/harshils1/portfoliov2"
    },
    {
      image: "https://www.acurite.com/media/catalog/product/cache/c1e9ab0486932534a7d741d10c346ab0/0/1/01535--hi-res_2021.jpg",
      title: "IoT Weather Station",
      text: "Coming Soon",
      link: "https://github.com/harshils1/IoT-Weather-Station"
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "20rem" , background: "black"}} key={index}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title style={{color: "white"}}>{card.title}</Card.Title>
          <Card.Text style={{color: "white"}}>{card.text}</Card.Text>
          <Button variant="primary"><a href={card.link} style={{color: "white", decoration: "none"}}>View Here</a></Button>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="project-container">
      <div className="project-parent">
        <div className="project-details">{cardInfo.map(renderCard)}</div>
      </div>
    </div>
  );
}
