export const Home = ({ dive }) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile"></div>
        <h1>My name is Daniel</h1>
        {<h1>{dive}</h1>}
      </header>
    </div>
  );
};
