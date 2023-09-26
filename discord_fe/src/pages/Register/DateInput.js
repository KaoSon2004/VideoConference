import icons from "../../utils/icons";
const {IoIosArrowDown} = icons;
function DateInput({placeholder}) {
    return (
        <div className="w-1/3 relative">
            <input  className="border border-[#000] text-[#dcddde]
                 bg-[#1e1f22] h-10 radius rounded-sm p-[10px] w-full" 
            placeholder={placeholder}/>
            <span className="absolute top-1/2 right-2 translate-y-[-50%] text-[#ccc] hover:text-[#fff]">
                <IoIosArrowDown />
            </span>
        </div>
    )
}
export default DateInput;