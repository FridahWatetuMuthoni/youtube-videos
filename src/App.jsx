import { Route, BrowserRouter, Routes } from "react-router-dom";
import useGlobalContext from "./hooks/useGlobalContext";
import {
  Navbar,
  Home,
  SearchFeed,
  VideoDetail,
  ChannelDetail,
} from "./Components";

function App() {
  const { mode } = useGlobalContext();

  return (
    <main
      className={`font-vietnam bg-bkg text-content min-h-screen`}
      data-theme={mode}
    >
      <section className="container mx-auto">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </BrowserRouter>
      </section>
    </main>
  );
}

export default App;
