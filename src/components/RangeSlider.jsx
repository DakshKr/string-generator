const RangeSlider = ({ id, name, min, max, value, onChange }) => {
  

  // Calculate position 
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative flex flex-col mt-5 mb-7 items-center w-full">
      <input
        className="
          w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
          dark:bg-gray-700
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-6
          [&::-webkit-slider-thumb]:w-6
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-transparent
          [&::-moz-range-thumb]:h-6
          [&::-moz-range-thumb]:w-6
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-transparent
        "
        id={id}
        type="range"
        name={name}
        min={min}
        max={max}
        value={value}
        onInput={onChange}
      />

      {/* Custom bob */}
      <div
        className="absolute top-[-20px] flex items-center justify-center
                   h-12 w-10 rounded-full bg-blue-500 text-white text-xl font-bold
                   transform -translate-x-1/2 pointer-events-none transition-transform"
        style={{ left: `${percent}%` }}
      >
        {value}
      </div>
    </div>
  );
};

export default RangeSlider;
