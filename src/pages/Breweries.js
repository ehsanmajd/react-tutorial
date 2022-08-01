import React from "react";
import './Breweries.css';

export default function Fruityvice() {
  const [breweries, setBreweries] = React.useState([]);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize] = React.useState(10);


  React.useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?page=${(pageIndex + 1) * pageSize}&per_page=${pageSize}`)
      .then(response => response.json())
      .then(data => setBreweries(data));
  }, [pageIndex, pageSize]);

  return (
    <div>
      <h1>Fruityvice</h1>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {breweries.map((fruit, index) => (
            <tr key={fruit.id}>
              <td>{(pageIndex * pageSize)  + (index + 1)}</td>
              <td>{fruit.name}</td>
              <td>{fruit.street}</td>
              <td>{fruit.city}</td>
              <td>{fruit.state}</td>
              <td>{fruit.postal_code}</td>
              <td>{fruit.phone}</td>
              <td>
                <a rel="noreferrer" target='_blank' href={fruit.website_url}>{fruit.website_url}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button disabled={pageIndex === 0} onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  );
}