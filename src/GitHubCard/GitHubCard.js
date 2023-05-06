import React from "react";
import Card from "react-bootstrap/Card";
import Frozen from "./Frozen.jpeg";

function GitHubCard() {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        {/* Use your GitHub info instead, but Frozen is used as an example */}
        <Card.Img variant="top" src={Frozen} />
        {/* Source: https://frozen.disney.com/gallery*/}
        <Card.Body>
          <Card.Title>Frozen</Card.Title>
          <Card.Text>
            When the newly crowned Queen Elsa accidentally uses her power to
            turn things into ice to curse her home in infinite winter, her
            sister Anna teams up with a mountain man, his playful reindeer, and
            a snowman to change the weather condition.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GitHubCard;
