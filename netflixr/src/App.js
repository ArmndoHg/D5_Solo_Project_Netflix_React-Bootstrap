import "./App.css";
import "./netflix.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewNav from "./components/NewNav";
import NewFooter from "./components/NewFooter";

import GenreDetails from "./components/GenreDetails";
import SecondGallery from "./components/SecondGallery";
import FirstGallery from "./components/FirstGallery";
import ThirdGallery from "./components/ThirdGallery";

function App() {
  return (
    <div className="App">
      <NewNav />
      <GenreDetails />
      <FirstGallery />
      <SecondGallery />
      <ThirdGallery />
      <NewFooter />
    </div>
  );
}

export default App;
