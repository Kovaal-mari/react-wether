import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./shared/Header/Header";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <div className="global_conteiner">
      <div className="conteiner">
        <Header />
        <div>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/contact-us" Component={ContactUs} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
