import { Routes, Route } from "react-router-dom";
import Layout from "@pages/Layout";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Weeks from "@components/Weeks";
import Home from "@pages/Home";
import Form from "@pages/Form";

const App = () => {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historique" element={<Weeks />} />
          <Route path="/week" element={<Form />} />
        </Routes>
      </Layout>
      <Footer />
    </main>
  );
};

export default App;
