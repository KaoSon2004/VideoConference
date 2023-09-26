import DateInput from "./DateInput";

function DateInputs () {
    return (
        <div className="w-full mt-4">
           <p className="text-sm text-[#b9bbbe] font-bold ml-1 mb-2 mt-3">
                {"Date Of Birth"}
                <span className="ml-1 text-red-600">*</span>
            </p>
            <div className="flex w-full  gap-4">
                <DateInput placeholder={"Day"} />
                <DateInput placeholder={"Month"} />
                <DateInput placeholder={"Year"}/>
            </div>

        </div>
    )
}

export default DateInputs;