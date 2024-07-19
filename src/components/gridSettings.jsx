import { useState } from "react";

export default function GridSettings( { data, setData } ) {

  const total = 100;

  const [rows, setRows] = useState(7);
  const [columns, setColumns] = useState(4);
  const [resolution, setResolution] = useState(400);

  const incrementRows = () => {
    if ((rows + 1) * columns <= total) setRows(rows => rows + 1);
  }

  const decrementRows = () => {
    if (rows > 1) setRows(rows => rows - 1);
  }

  const incrementColumns = () => {
    if (rows * (columns + 1) <= total) setColumns(columns => columns + 1);
  }

  const decrementColumns = () => {
    if (columns > 1) setColumns(columns => columns - 1);
  }

  const handleResolutionChange = (event) => {
    setResolution(Number(event.target.value));
  }

  const generateData = () => {
    setData(() => ({ rows: rows, columns: columns, resolution: resolution }));
  }

  return (
    <div className="grid-settings-container">
      rows:
      <div className="rows-button">
        <span className="rows-minus" onClick={decrementRows}>-</span>
         <span className="rows">{`${rows}`}</span>
        <span className="rows-plus" onClick={incrementRows}>+</span>
      </div>
      columns: 
      <div className="columns-button">
        <span className="columns-minus" onClick={decrementColumns}>-</span>
        <span className="columns">{`${columns}`}</span>
        <span className="columns-plus" onClick={incrementColumns}>+</span>
      </div>
      <div>{`album covers to display: ${rows * columns}`}</div>
      <div>
        {`side length of each image:`}
        <input 
          onChange={handleResolutionChange} 
          type="range" 
          min="200" 
          max="640" 
          value={resolution} 
          className="slider" 
          id="myRange" 
        />
        {`${resolution} px`}
      </div>
      <button className="generate-button" onClick={generateData}>
        generate!
      </button>
    </div>
  );
}
