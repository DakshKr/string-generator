import { CopyToClipboard } from "react-copy-to-clipboard";

const OutputAndCopy = ({ string, setString }) => {
  return (
    <div className="relative mb-4 focus:outline-none">
      <textarea
        className="w-full min-h-40 p-3 pr-20 bg-[#0E0E0E] text-white rounded-md border  border-gray-700 focus:outline-none resize-none"
        name="output"
        defaultValue={string}
        id="output"
        rows={2}
        placeholder={"Hello adventurer! "}
        onChange={(e) => setString(e.target.value)}
      ></textarea>

      <CopyToClipboard text={string || "404 Not Found"}>
        <button
          type="button"
          className="absolute focus:outline-none right-2 bottom-0 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded-md text-lg"
          title="click to copy"
        >
          Copy
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default OutputAndCopy;