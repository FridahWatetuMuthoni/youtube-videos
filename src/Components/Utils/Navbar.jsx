import { Link } from "react-router-dom";
import useGlobalContext from "../../hooks/useGlobalContext";
import { FaSun } from "react-icons/fa6";
import { MdNightlight } from "react-icons/md";
import { logo } from "./constants";
import SearchBar from "../Search/SearchBar";

function Navbar() {
  const { mode, setMode } = useGlobalContext();

  const handleModeChange = () => {
    let new_mode = mode === "dark" ? "light" : "dark";
    setMode(new_mode);
  };

  return (
    <header className="w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link
          to="/"
          className="flex title-font font-medium items-center  mb-4 md:mb-0"
        >
          <img src={logo} alt="logo" style={{ height: "45px" }} />

          <span className="ml-3 text-xl">Youtube</span>
        </Link>
        <section>
          <SearchBar />
        </section>
        <section
          className="text-2xl mr-3 hover:cursor-pointer mt-3 md:mt-0 text-red-600 hover:text-red-500"
          onClick={handleModeChange}
        >
          {mode === "dark" ? <FaSun /> : <MdNightlight />}
        </section>
      </div>
    </header>
  );
}

export default Navbar;
