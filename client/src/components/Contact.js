import React from "react";

import AppBar from "./AppBar";
import Footer from "./Footer";
import ha from "../images/habeeb.jpg";
import sa from "../images/salam.jpg";
import mo from "../images/mohammad.jpg";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function Contact() {
  return (
    <div className="about">
      <AppBar />

      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://www.ict-solutions-events.com/wp-content/uploads/2019/12/TE-Title-Contact-Us.png"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact us </h1>
            <h2>WE,RE HERE TO HELP</h2>
          </div>
        </div>
      </div>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={ha} />
          <Card.Body>
            <Card.Title>Habeeb Abo mokho </Card.Title>
            <Card.Title>Supervisor</Card.Title>
            <Card.Title></Card.Title>
            <Card.Text>
              <br></br>
              Habeeb2022@gmail.com
              <br></br>
              0598506088
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={sa} />
          <Card.Body>
            <Card.Title>Salam Quraan</Card.Title>
            <Card.Title>Admin</Card.Title>
            <Card.Text>
              <br></br>
              salamquraan789@gmail.com
              <br></br>
              0597156276
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={mo} />
          <Card.Body>
            <Card.Title>Mohammad quttna</Card.Title>
            <Card.Title> CEO & Founder</Card.Title>

            <Card.Text>
              <br></br>
              mohammadquttna@gmail.com
              <br></br>
              059750339
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <Footer />
    </div>
  );
}

export default Contact;
