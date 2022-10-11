import Layout from "@pages/Layout";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Weeks from "@components/Weeks";
import Calendar from "@components/Calendar";

const App = () => {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <Layout>
        <Calendar />
        <Weeks />
      </Layout>
      <Footer />
    </main>
  );
};

export default App;
