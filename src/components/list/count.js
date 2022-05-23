import React from "react";
import { useState } from "react";

const mock = [
  {
    id: 1,
    name: 'David',
    checked: false
  },
  {
    id: 2,
    name: 'John',
    checked: false
  },
  {
    id: 3,
    name: 'Mark',
    checked: false   
  },
  {
    id: 4,
    name: 'Paul',
    checked: false
  }
]

const Count = () => {
  const [itens, setItems] = useState(mock);

  const handleChange = (id) => {
    const newItens = itens.map(item => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems(newItens);
  };
  return (
    <div>
      <h1>List</h1>

      <ul>
        {mock.map(item => (
          <li key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={e => handleChange(item.id)} />
            {item.name}
          </li>
        ))}
      </ul>

      <h1>Count</h1>
      <p>{itens.filter(item => item.checked).length}</p>

    </div>
  );
}

export default Count;