// src/components/UI/journal/JournalSidebar.jsx

import { useState } from "react";
import { CalendarDays, FileText } from "lucide-react";
import { useSelector } from "react-redux";
import clsx from "clsx";

const JournalSidebar = () => {
  // Local state for which date is selected, and for filtering
  const [selectedDate, setSelectedDate] = useState("");
  const [search, setSearch] = useState("");

  // Pull current theme and journal entries from Redux
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === "dark";

  const entries = useSelector((state) => state.journal.journal);
  // entries is an array of { id, entry, mood, note, createdAt, tags }

  // Apply search filter (on entry text or date string)
  const filteredEntries = entries.filter((e) => {
    const dateStr = e.createdAt.slice(0, 10);
    return (
      e.entry.toLowerCase().includes(search.toLowerCase()) ||
      dateStr.includes(search)
    );
  });

  return (
    <div
      className={clsx(
        "h-full p-4 flex flex-col",
        isDark ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
      )}
    >
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <CalendarDays className="w-5 h-5" /> My Journal
      </h2>

      {/* Date picker */}
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className={clsx(
          "w-full mb-4 px-3 py-2 rounded-md border",
          isDark
            ? "bg-gray-600 border-gray-500 text-gray-100"
            : "bg-gray-100 border-gray-300 text-gray-800"
        )}
      />

      {/* Search field */}
      <input
        type="text"
        placeholder="Search by text or date"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={clsx(
          "w-full mb-4 px-3 py-2 rounded-md border",
          isDark
            ? "bg-gray-600 border-gray-500 text-gray-100"
            : "bg-gray-100 border-gray-300 text-gray-800"
        )}
      />

      {/* Entries list */}
      <div className="overflow-y-auto flex-1 pr-2">
        {filteredEntries.length > 0 ? (
          filteredEntries.map((entry) => {
            const entryDate = entry.createdAt.slice(0, 10);
            const isActive = selectedDate === entryDate;

            return (
              <div
                key={entry.id}
                onClick={() => setSelectedDate(entryDate)}
                className={clsx(
                  "p-3 mb-2 rounded-md cursor-pointer transition-shadow",
                  isDark
                    ? isActive
                      ? "bg-gray-600"
                      : "bg-gray-800 hover:bg-gray-700 shadow-inner"
                    : isActive
                    ? "bg-orange-200"
                    : "bg-gray-100 hover:bg-orange-100 shadow-sm"
                )}
              >
                <p className="flex items-center gap-2 font-medium">
                  <FileText
                    className={clsx(
                      "w-4 h-4",
                      isDark ? "text-orange-300" : "text-orange-500"
                    )}
                  />
                  {entry.entry.length > 20
                    ? entry.entry.substring(0, 100) + "…"
                    : entry.entry}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(entry.createdAt).toLocaleDateString()}
                </p>
              </div>
            );
          })
        ) : (
          <p className="text-sm text-center text-gray-500">No entries found.</p>
        )}
      </div>
    </div>
  );
};

export default JournalSidebar;
