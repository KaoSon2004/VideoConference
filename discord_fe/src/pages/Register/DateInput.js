import { useEffect, useRef, useState } from "react";
import icons from "../../utils/icons";
import classnames from "classnames/bind";
import styles from "./DateInput.module.scss";
const cx = classnames.bind(styles);
const {IoIosArrowDown} = icons;
const arrDays = [...Array(31).keys()].map(x => x + 1);
const arrMonths = [...Array(12).keys()].map(x => x + 1);
const arrYears = [...Array(100).keys()].map(x => x + 1920).reverse();
function DateInput({placeholder, type, setDay, setMonth, setYear}) {
    const [popUp, setPopup] = useState(false);

    const [dialogArr, setDialogArr] = useState(type == 'Day' ? arrDays 
                                : (type == 'Month' ? arrMonths : arrYears));
    const [activeIndex, setActiveIndex] = useState(-1);

    //Ref used to save reference to date dialog
    const ref = useRef();


    // Handle Click Out Side Choose Date Dialog
    useEffect(() => {
        const handleClickOutSide = (event) => {
            if(ref.current && ref.current.contains(event.target) == false) {
                setPopup(false);
            } 

        }
        document.addEventListener("click", handleClickOutSide, true);
        return () => {
            document.removeEventListener("click", handleClickOutSide, true);
        }
    }, [ref.current])

    useEffect(() => {
        if(activeIndex != -1) {
            if(setDay != undefined) {
                setDay(dialogArr[activeIndex]);
               }
            if(setMonth != undefined) {
                setMonth(dialogArr[activeIndex]);
             }
            if(setYear != undefined) {
                setYear(dialogArr[activeIndex]);
            }
        }
    }, [dialogArr, activeIndex])
    return (
        <div className="w-1/3 relative">
            <input  className="border border-[#000] text-[#b8babe]
                 bg-[#1e1f22] h-10 radius rounded-sm p-[10px] w-full " 
            placeholder={placeholder}
            value={activeIndex != - 1 ? dialogArr[activeIndex] : ""}
            onClick={() => {
                setPopup(true);
            }}
            />
            <span className="absolute top-1/2 right-2 translate-y-[-50%] text-[#ccc] hover:text-[#fff]">
                <IoIosArrowDown />
            </span>
            {popUp && 
            <div ref={ref} className="bg-[#36393f] border border-[#000] text-[#dcddde] h-28 w-full absolute bottom-0 mb-10">
                <ul className={`max-h-[100%] overflow-auto ${cx('dateDialog')}`}>
                    {
                        dialogArr.map((ele, index) => (
                            <li 
                                key={index} 
                                className=" bg-[#36393f] px-3 py-1 hover:cursor-pointer hover:bg-[#36393f66]"
                                onClick={() => {
                                    setActiveIndex(index)
                                    setPopup(false)
                                }}
                            >
                                {ele}
                            </li>
                        ))
                    }
                </ul>
            </div>
            }
        </div>
    )
}
export default DateInput;