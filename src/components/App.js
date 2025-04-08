import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <div>Hello World</div>
    </div>
  );
}
export default App;
