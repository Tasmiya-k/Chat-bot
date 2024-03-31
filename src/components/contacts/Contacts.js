import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { API, graphqlOperation, Storage } from "aws-amplify";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { v4 as uuid } from "uuid";

function Contacts(props) {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    cell: "",
  });
  const [profilePic, setProfilePic] = useState("");
  const [profilePicPaths, setProfilePicPaths] = useState([]);

  return <Container></Container>;
}

export default Contacts;
