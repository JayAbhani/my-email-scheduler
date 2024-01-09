// src/components/ScheduleList.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ScheduleItem from "./ScheduleItem";
import ScheduleForm from "./ScheduleForm";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Fetch schedules from the backend (if available)
  useEffect(() => {
    // Implement fetch logic or use sample data
    const fetchData = async () => {
      // Use fetch('/api/schedules') or similar
      // Update the 'schedules' state with fetched data
      const data = []; // Replace with fetched data
      setSchedules(data);
    };

    fetchData();
  }, []);

  // Function to handle the form toggle
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Function to handle schedule creation
  const createSchedule = (newSchedule) => {
    // Implement logic to send the new schedule to the backend
    // Update the 'schedules' state with the newly created schedule
    setSchedules([...schedules, newSchedule]);
    toggleForm();
  };

  // Function to handle schedule deletion
  const deleteSchedule = (id) => {
    // Implement logic to delete the schedule from the backend
    // Update the 'schedules' state without the deleted schedule
    const updatedSchedules = schedules.filter((schedule) => schedule.id !== id);
    setSchedules(updatedSchedules);
  };

  // Function to handle schedule update
  const updateSchedule = (updatedSchedule) => {
    // Implement logic to update the schedule in the backend
    // Update the 'schedules' state with the updated schedule
    const updatedSchedules = schedules.map((schedule) =>
      schedule.id === updatedSchedule.id ? updatedSchedule : schedule
    );
    setSchedules(updatedSchedules);
    toggleForm();
  };

  return (
    <Container>
      <Button onClick={toggleForm}>Add Schedule</Button>
      {showForm && (
        <ScheduleForm
          onSubmit={createSchedule}
          onCancel={() => setShowForm(false)}
        />
      )}
      <ul>
        {schedules.map((schedule) => (
          <ScheduleItem
            key={schedule.id}
            schedule={schedule}
            onDelete={deleteSchedule}
            onUpdate={updateSchedule}
          />
        ))}
      </ul>
    </Container>
  );
};

export default ScheduleList;
