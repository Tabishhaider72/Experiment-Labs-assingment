// components/AddEditEvent.js
import { useState } from 'react';
import EventService from '../services/EventService';

function AddEditEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    await EventService.createEvent(
      { title, description, startDate, endDate },
      token
    );
    window.location.href = '/events';
  };

  return (
    <div style={styles.screenContainer}>
      <div style={styles.calendarContainer}>
      </div>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Add/Edit Event</h2>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          style={styles.input}
        />
        <input
          type="datetime-local"
          onChange={(e) => setStartDate(e.target.value)}
          style={styles.input}
        />
        <input
          type="datetime-local"
          onChange={(e) => setEndDate(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSave} style={styles.saveButton}>
          Save
        </button>
      </div>
    </div>
  );
}

const styles = {
  screenContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  calendarContainer: {
    marginRight: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  formContainer: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    maxWidth: '400px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  saveButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#04AA6D',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
};

export default AddEditEvent;
