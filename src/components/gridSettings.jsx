import { useState, useContext } from "react";
import { AppContext } from "../utils/appContext";
import { shuffle } from "../utils/randomizeAlbums";

export default function GridSettings() {

  const { setData, covers, setCovers } = useContext(AppContext);

  const total = covers.length;

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

  const shuffleCovers = () => {
    setCovers(shuffle(covers));
  }
  
  const downloadCovers = () => {
    
  }

  return (
    <div className="grid-settings-container">
      <h1 className="grid-settings-header">banner settings</h1>
      <div className="grid-settings-content">
        <div className="rows-columns-container">
          <div className="rows-and-columns">
            <div className="rows-columns-button-and-text">
              rows:
              <div className="rows-button">
                <span className="rows-minus" onClick={decrementRows}>-</span>
                <span className="rows">{`${rows}`}</span>
                <span className="rows-plus" onClick={incrementRows}>+</span>
              </div>
            </div>
            <div className="rows-columns-button-and-text">
              columns:
              <div className="columns-button">
                <span className="columns-minus" onClick={decrementColumns}>-</span>
                <span className="columns">{`${columns}`}</span>
                <span className="columns-plus" onClick={incrementColumns}>+</span>
              </div>
            </div>
          </div>
          <div className="number-of-covers">{`album covers to display: ${rows * columns}`}</div>
          <button className="generate-button" onClick={generateData}>
            update dimensions!
          </button>
        </div>
        <div className="slider-resolution-and-button">
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
          {`${resolution} pixels`}
          <div className="buttons">
          <button className="shuffle-button" onClick={shuffleCovers}>
            shuffle!
          </button>
          <button className="download-button" onClick={downloadCovers}>
            download!
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
