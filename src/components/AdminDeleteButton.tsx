import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  bookingId: string;
  onDelete: (bookingId: string) => void;
}

const AdminDeleteButton: React.FC<Props> = ({ bookingId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://school-restaurant-api.azurewebsites.net/booking/delete/${bookingId}`);
      onDelete(bookingId);
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <button onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
};

export default AdminDeleteButton;
