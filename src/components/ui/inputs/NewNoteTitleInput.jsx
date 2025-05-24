function NewNoteTitleInput({ value, onChange }) {
  return (
    <div className="px-4">
      <input
        className="placeholder: placeholder:text-2xl mt-1 text-2xl  outline-0 bg-transparent w-full"
        type="text"
        value={value}
        onChange={onChange}
        maxLength="26"
        placeholder="Enter a title..."
      />
    </div>
  );
}

export default NewNoteTitleInput;
