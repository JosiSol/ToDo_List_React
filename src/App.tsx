import Todo from "./components/Todo";
import BgImage from "./assets/image.png";

const App = () => {
  return (
    <div className="bg-contain" style={{ backgroundImage: `url(${BgImage})` }}>
      <Todo />
    </div>
  );
};

export default App;
