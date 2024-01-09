// src/components/ScheduleItem.js
import React from 'react';

const ScheduleItem = ({ schedule, onDelete, onUpdate }) => {
  // Implement logic to render schedule details
  return (
    <li>
      {schedule.title} - {schedule.description} - {schedule.subject} - {schedule.frequency} -{' '}
      {schedule.repeat} - {schedule.time}{' '}
      <button onClick={() => onUpdate(schedule)}>Edit</button>
      <button onClick={() => onDelete(schedule.id)}>Delete</button>
    </li>
  );
};

export default ScheduleItem;
