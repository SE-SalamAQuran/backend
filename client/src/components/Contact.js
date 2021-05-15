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
            <h2>WE ARE HERE TO HELP</h2>
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
            <Card.Title>Salam Quran</Card.Title>
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
      <div style={{ textAlign: "center", fontWeight: "bold" }}>
        For more information please visit our facebook page or contact us via
        our WhatsApp business account <br></br>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100015263380178"
        >
          <img
            alt="FB-icon"
            src="https://img.icons8.com/cute-clipart/50/000000/facebook-new.png"
          />{" "}
        </a>
        <a href="https://wa.me/yournumber/" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/cute-clipart/55/000000/whatsapp.png"
            alt="WhatsApp"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
