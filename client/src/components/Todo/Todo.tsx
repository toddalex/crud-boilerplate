import React from 'react';
import './Todo.css';

interface Props {
  key: string;
  id: string;
  text: string;
  onDelete: (id: string) => void;
}

const Todo: React.FC<Props> = ({ text, onDelete, id }) => {
  return(
    <div className="Todo" style={{display: "flex"}}>
      <p>{text}</p>
      <button type="submit" onClick={onDelete.bind(null, id)}>X</button>
    </div>
  )
}

export default Todo;