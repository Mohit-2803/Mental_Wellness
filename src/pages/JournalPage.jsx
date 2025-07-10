import JournalSidebar from "../components/UI/journal/JournalSidebar";
import QuoteOfTheDay from "../components/UI/quotes/QuotesDisplay";
import MoodSelector from "../components/UI/journal/MoodSelector";
import JournalEditor from "../components/UI/journal/JournalEditor";
import { useSelector } from "react-redux";
import clsx from "clsx";
import bgImage from "../assets/plain-smooth-green-wall-texture.jpg";

const JournalPage = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={clsx("flex flex-col lg:flex-row min-h-screen")}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Sidebar with past entries and calendar */}
      <aside className="w-full lg:w-1/4 bg-gray-100">
        <JournalSidebar />
      </aside>

      {/* Main journal writing area */}
      <main className="flex-1 p-6 overflow-y-auto text-white">
        <div className="mb-16">
          <QuoteOfTheDay />
        </div>

        <div className="mb-6">
          <MoodSelector />
        </div>

        <div className="mb-6">
          <JournalEditor />
        </div>
      </main>
    </div>
  );
};

export default JournalPage;
