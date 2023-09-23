const InputWithLabel = (props) => {
  const { value, setValue, type, label, required, placeholder } = props;
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="flex flex-col justify-center w-full">
      <p className="text-sm text-[#b9bbbe] font-bold ml-1 mb-2 mt-3">
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </p>

      <input
        className="border border-[#000] text-[#dcddde] bg-[#1e1f22] h-10 radius rounded-sm p-[10px] w-full"
        value={value}
        onChange={handleInputChange}
        type={type}
        placeholder={placeholder ?? ""}
      />
    </div>
  );
};
export default InputWithLabel;
