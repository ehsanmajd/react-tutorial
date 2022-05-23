import React from 'react';

const Home = () => {
  const [disabled, setDisabled] = React.useState(false);

  return (
    <div>
      <h1>Check box and button</h1>

      CLICK ME :::::::: <input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} />

      <button disabled={disabled}>SUBMIT</button>
    </div>
  );
}

export default Home;