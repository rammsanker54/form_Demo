import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Trash } from "react-bootstrap-icons";
const DemoForm = () => {
  // Define state variables to store form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, like sending it to a server
    console.log("Submitted:", { name, email });
    // You can also reset the form here
    setName("");
    setEmail("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const containerStyle = {
    margin: "20px",

    width: "50%",
  };

  return (
    <div className="container">
      <h2>Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" style={containerStyle}>
          <Form.Control
            type="text"
            placeholder="Title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage" style={containerStyle}>
          <Form.Control
            as="textarea"
            rows={3} // Specify the number of rows for the textarea
            placeholder="Description"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formImage" style={containerStyle}>
          <Form.Control
            id="custom-file"
            label="Select image"
            placeholder="Select Image"
            onChange={handleImageChange}
            accept="image/*" // Specify accepted file types
            required
            type="text"
          />
        </Form.Group>
        <Form.Group controlId="formEmail" style={containerStyle}>
          <Form.Control
            type="email"
            placeholder="Enter your Latitude"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail" style={containerStyle}>
          <Form.Control
            type="email"
            placeholder="Enter your Longitude"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" class="m-2">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default DemoForm;
