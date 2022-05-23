import React from "react";
import { useState } from "react";


const mock = [
  {
    id: 1,
    name: 'David',
  },
  {
    id: 2,
    name: 'John',
  },
  {
    id: 3,
    name: 'Mark',    
  },
  {
    id: 4,
    name: 'Paul',
  }
]

const SelectedId = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      <h1>List</h1>

      <ul>
        {mock.map(item => (
          <li key={item.id}>
            <input type="checkbox" checked={selectedId === item.id} onChange={e => setSelectedId(e.target.checked ? item.id : null)} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedId;