import BiggerOnHover from "../atoms/BiggerOnHover.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold my-5 text-center">
        Welcome to <strong>SOLARWATCH</strong>
      </h1>
      {isLoggedIn ? (
        <>
          <p className="text-lg my-5">
            Whether you are planning an early morning jog, a sunset picnic, or
            simply curious about the changing skies,
            <strong> SOLARWATCH </strong> provides accurate sunrise and sunset
            times tailored to your selected locations.
          </p>
          <p className="text-lg my-5">
            Click on the &quot;Get info&quot; button to start.
          </p>
          <BiggerOnHover>
            <Link
              to="/solar-watch"
              className="inline-block font-semibold py-2 px-4 rounded-lg shadow-md transition-transform bg-pink-300 hover:bg-buttonHover text-white"
            >
              Get info
            </Link>
          </BiggerOnHover>
        </>
      ) : (
        <p className="text-lg my-5">
          Your daily guide to the sun&lsquo;s journey! Register and log in to
          explore sunrise and sunset times for cities worldwide. Plan your day,
          catch the perfect sunrise, or unwind with a sunset — all at your
          fingertips with
          <strong> SOLARWATCH </strong>.
        </p>
      )}
    </div>
  );
}

export default Home;
