import Home from "./components/Home";
import ContactUs from "./components/Contact US/ContactUsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
