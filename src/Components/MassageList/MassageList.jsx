import "./Massage.css";

export default function MassageList({ onGetPostClick }) {
  return (
    <center>
      <div className="px-4 py-5 my-5 text-center no-post">
        <h1>no post available</h1>
        <button className="btn btn-primary" onClick={onGetPostClick}>
          get post from server
        </button>
      </div>
    </center>
  );
}
