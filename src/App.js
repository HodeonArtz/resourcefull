import Nav from "./components/nav/Nav";
import Aside from "./components/aside/Aside";
import Screen from "./components/screen/Screen";
import "./sass/main.scss";

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <main className="content">
        <Aside />
        <Screen />
      </main>
    </div>
  );
}

export default App;
