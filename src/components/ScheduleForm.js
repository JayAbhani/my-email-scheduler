// src/components/ScheduleForm.js
import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  cursor: pointer;
`;

const ScheduleForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "",
    frequency: "Daily",
    repeat: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Title:</Label>
      <Input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      {/* ... other form fields ... */}
      <Button type="submit">Done</Button>
      <Button type="button" onClick={onCancel}>
        Cancel
      </Button>
    </Form>
  );
};

export default ScheduleForm;
