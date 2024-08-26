import React, { useState } from 'react';
import Popup from '../../../../components/popup/Popup';

interface CreateTodoItemPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, description: string) => void;
}

const CreateTodoItemPopup: React.FC<CreateTodoItemPopupProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (title.trim() && description.trim()) {
      onSubmit(title, description);
      setTitle('');
      setDescription('');
      onClose();
    }
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div>
        <h2>Create Todo Item</h2>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </label>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </Popup>
  );
};

export default CreateTodoItemPopup;