import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
       <Header/>
      </div>
      <ButtonGradient />
    </div>
  );
}

export default App;
