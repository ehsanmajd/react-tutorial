import { useState } from "react";
import Count from "../components/list/count";
import SelectedId from "../components/list/selectedId";

const map = {
  1: <SelectedId />,
  2: <Count />
}
const List = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <h1>List</h1>
      {Object.keys(map).map(key => {
        return (
          <button onClick={() => setSelectedId(key)}>Number {key}</button>
        )
      })}
      <div>
        {map[selectedId]}
      </div>
    </div>

  );
}

export default List;