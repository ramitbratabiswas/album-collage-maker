import { useState } from "react";

export default function GridSettings() {

  const [rows, setRows] = useState(7);
  const [columns, setColumns] = useState(4);

  const incrementRows = () => {
    setRows(rows => rows + 1);
  }

  const decrementRows = () => {
    setRows(rows => rows - 1);
  }

  const incrementColumns = () => {
    setColumns(columns => columns + 1);
  }

  const decrementColumns = () => {
    setColumns(columns => columns - 1);
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
      <div>{`side length of each image: 400px `}</div>
    </div>
  );
}