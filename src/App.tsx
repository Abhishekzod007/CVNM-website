import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import useApi from "./contexts/ApiContext";
import LandingPage from "./pages/LandingPage/LandingPage";


export default function App() {

  return (
    <div className="App">
      <Root />
    </div>
  );
}

function Root() {

  const api = useApi()

  return (
    <main className="relative">
      {api.loading ? <><div className="flex h-screen items-center justify-center">
        <h1 className="text-primary text-7xl font-semibold font-raleway">Loading...</h1>
      </div></> : <>
        <Navbar />
        <LandingPage />
        <Footer />
      </>
      }</main>
  );
}