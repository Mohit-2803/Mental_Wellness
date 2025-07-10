import { useState, useEffect } from "react";
import { Smile, Meh, Frown, Angry, Laugh } from "lucide-react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { setMood } from "../../../features/journal/mood_slice";

const moods = [
  { id: "happy", icon: <Laugh />, label: "Happy" },
  { id: "calm", icon: <Smile />, label: "Calm" },
  { id: "neutral", icon: <Meh />, label: "Neutral" },
  { id: "sad", icon: <Frown />, label: "Sad" },
  { id: "angry", icon: <Angry />, label: "Angry" },
];

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");

  const theme = useSelector((state) => state.theme.theme);
  const mood = useSelector((state) => state.mood.mood);
  const isDark = theme === "dark";
  const dispatch = useDispatch();

  // Whenever both selectedMood and note are non-empty, dispatch
  useEffect(() => {
    if (selectedMood && note.trim() !== "") {
      dispatch(setMood({ mood: selectedMood, note }));
    }
  }, [dispatch, selectedMood, note]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-xl w-full text-center">
        <h2 className="text-2xl font-semibold mb-3">
          How are you feeling today?
        </h2>

        <div className="flex justify-center flex-wrap gap-4 mb-4">
          {moods.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMood(m.id)}
              className={clsx(
                "flex flex-col items-center justify-center w-16 h-16 rounded-full border-2 transition cursor-pointer hover:scale-105 hover:border-orange-600",
                selectedMood === m.id
                  ? "bg-orange-500 text-white border-orange-600"
                  : "bg-white text-gray-700 border-orange-500 hover:text-orange-500"
              )}
            >
              {m.icon}
              <span className="text-xs font-semibold mt-1">{m.label}</span>
            </button>
          ))}
        </div>

        {selectedMood && (
          <div className="mt-2 text-left">
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Write a quick note !
            </label>
            <textarea
              rows="2"
              className={clsx(
                "w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-orange-400 resize-none",
                isDark
                  ? "bg-gray-700 text-gray-100 placeholder:text-gray-200"
                  : "bg-white text-gray-800"
              )}
              placeholder="I'm feeling this way because..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodSelector;
