import Layout from "@pages/Layout";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const App = () => {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <Layout>
        <h1>My App</h1>
        <p>My App is awesome!</p>
      </Layout>
      <Footer />
    </main>
  );
};

export default App;
