const InputBox = ({ id, name, onChangeFn, checked }) => {
  return (
    <div className="flex items-center gap-2 my-2 mb-4">
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={onChangeFn}
        checked={checked}
        className="w-7 h-7"
      />
      <label
        htmlFor={id}
        className="ml-2 bold font-medium text-gray-300 capitalize"
      >
        {id}
      </label>
    </div>
  );
};

export default InputBox;

// <label htmlFor="lowercase">lowercase</label>
// <input
//   type="checkbox"
//   name="lowercase"
//   id="lowercase"
//   onClick={(e) => setLowercaseStatus((old) => e.target.checked)}
//   defaultChecked={true}
// />
