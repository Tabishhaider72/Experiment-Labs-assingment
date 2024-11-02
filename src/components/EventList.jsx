// components/EventList.jsx
import { useState, useEffect } from 'react';
import EventService from '../services/EventService';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const token = localStorage.getItem('token');
      const response = await EventService.getEvents(token);
      setEvents(response.data);
    };
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await EventService.deleteEvent(id, token);
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Your Events</h2>
      <div style={styles.eventListContainer}>
        {events.map((event) => (
          <div key={event.id} style={styles.eventCard}>
            <h3 style={styles.eventTitle}>{event.title}</h3>
            <p style={styles.eventDescription}>{event.description}</p>
            <p style={styles.eventDateTime}>
              <strong>Start:</strong> {new Date(event.startDate).toLocaleString()}
            </p>
            <p style={styles.eventDateTime}>
              <strong>End:</strong> {new Date(event.endDate).toLocaleString()}
            </p>
            <button onClick={() => handleDelete(event.id)} style={styles.deleteButton}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    padding: '20px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    backgroundColor: '#f1f1f1',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  eventListContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  eventCard: {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  eventTitle: {
    fontSize: '18px',
    marginBottom: '8px',
    color: '#333',
  },
  eventDescription: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px',
  },
  eventDateTime: {
    fontSize: '12px',
    color: '#555',
    marginBottom: '8px',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
};

export default EventList;
