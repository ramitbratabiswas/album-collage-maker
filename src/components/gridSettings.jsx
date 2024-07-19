import { useState } from "react";

export default function GridSettings({ data, setData, covers, setCovers }) {

  const total = 100;

  const [rows, setRows] = useState(4);
  const [columns, setColumns] = useState(7);
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
    setData(() => ({ rows, columns, resolution }));
  }

  return (
    <div className="grid-settings-container">
      <div className="rows-columns-">
        <div className="rows-and-columns">
          <div>
            rows:
            <div className="rows-button">
              <span className="rows-minus" onClick={decrementRows}>-</span>
              <span className="rows">{`${rows}`}</span>
              <span className="rows-plus" onClick={incrementRows}>+</span>
            </div>
          </div>
          <div>
            columns:
            <div className="columns-button">
              <span className="columns-minus" onClick={decrementColumns}>-</span>
              <span className="columns">{`${columns}`}</span>
              <span className="columns-plus" onClick={incrementColumns}>+</span>
            </div>
          </div>
        </div>
        <div className="number-of-covers">{`album covers to display: ${rows * columns}`}</div>
      </div>
      <div className="slider-and-resolution">
        {`side length of each image:`}
        <input
          onChange={handleResolutionChange}
          type="range"
          min="100"
          max="640"
          value={resolution}
          className="slider"
          id="myRange"
        />
        {`${resolution} px`}
      </div>
      <div className="buttons">
        <button className="generate-button" onClick={generateData}>
          update!
        </button>
        <button className="shuffle-button" onClick={generateData}>
          shuffle!
        </button>
      </div>
    </div>
  );
}
