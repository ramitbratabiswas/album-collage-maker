export const AlbumInfo = ({ cover, isOpen, onClose }) => {

  console.log("in AlbumInfo");
  
  if (!cover) return null;

  return (
    <div className={`album-info ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>Close</button>
      <h2>{cover.album}</h2>
      <p>{cover.artist}</p>
      <img src={cover.link} alt={cover.album} />
    </div>
  );

};
