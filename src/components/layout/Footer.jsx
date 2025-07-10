import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isLight = theme === "light";

  return (
    <footer className={`py-8 ${isLight ? "bg-gray-300" : "bg-gray-900"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full lg:w-1/3 xl:w-1/4 mb-4 lg:mb-0">
            <h6
              className={`text-lg font-bold mb-2 ${
                isLight ? "text-gray-600" : "text-white"
              }`}
            >
              Mental Wellness Journal
            </h6>
            <p className={`${isLight ? "text-gray-600" : "text-gray-400"}`}>
              A web app for tracking your mental wellness journey.
            </p>
          </div>

          <div className="w-full lg:w-1/3 xl:w-1/4 mb-4 lg:mb-0">
            <h6
              className={`text-lg font-bold mb-2 ${
                isLight ? "text-gray-600" : "text-white"
              }`}
            >
              Quick Links
            </h6>
            <ul>
              {["Home", "About", "Contact"].map((link) => (
                <li key={link} className="mb-2">
                  <a
                    href="#"
                    className={`hover:text-white ${
                      isLight
                        ? "text-gray-600 hover:text-gray-900"
                        : "text-gray-400"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/3 xl:w-1/4 mb-4 lg:mb-0">
            <h6
              className={`text-lg font-bold mb-2 ${
                isLight ? "text-gray-600" : "text-white"
              }`}
            >
              Social Media
            </h6>
            <ul>
              {["Facebook", "Twitter", "Instagram"].map((platform) => (
                <li key={platform} className="mb-2">
                  <a
                    href="#"
                    className={`hover:text-white ${
                      isLight
                        ? "text-gray-600 hover:text-gray-900"
                        : "text-gray-400"
                    }`}
                  >
                    <i className={`fab fa-${platform.toLowerCase()} mr-2`}></i>{" "}
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/3 xl:w-1/4 mb-4 lg:mb-0">
            <h6
              className={`text-lg font-bold mb-2 ${
                isLight ? "text-gray-600" : "text-white"
              }`}
            >
              Newsletter
            </h6>
            <p className={`${isLight ? "text-gray-600" : "text-gray-400"}`}>
              Stay up-to-date with our latest news and updates.
            </p>
            <form>
              <input
                type="email"
                placeholder="Your email address"
                className={`w-full py-2 pl-3 text-sm font-bold mt-5 mb-5 outline-orange-300 ${
                  isLight
                    ? "bg-white text-gray-700"
                    : "bg-gray-800 text-white placeholder-gray-400"
                }`}
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className={`text-center ${
            isLight ? "text-gray-600" : "text-gray-400"
          }`}
        >
          2023 Mental Wellness Journal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
