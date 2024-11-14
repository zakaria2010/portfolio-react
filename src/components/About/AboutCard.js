import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Bonjour à tous, je suis <span className="purple">Samlali Zakaria </span>
            de <span className="purple"> Rabat, Maroc.</span>
            <br />
              Je suis Ingénieur informatique spécialisé en développement web avec un diplôme en ingénierie informatique et
              réseaux EMSI . Maîtrise de JavaScript, ReactJS, Redux, Java et Spring Boot. Motivé, méticuleux, bonnes
              compétences relationnelles. Prêt à relever des défis techniques et à m'investir dans des projets ambitieux
              au sein d'une équipe dynamique
            <br />
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
          « Efforcez-vous de construire des choses qui font la différence ! »{" "}
          </p>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
