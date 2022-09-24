import Layout from "@pages/Layout";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Weeks from "@components/Weeks";

const App = () => {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <Layout>
        <Weeks />
      </Layout>
      <Footer />
    </main>
  );
};

export default App;
