import DateInput from "./DateInput";

function DateInputs ({setDay, setMonth, setYear}) {
    return (
        <div className="w-full mt-4">
           <p className="text-sm text-[#b9bbbe] font-bold ml-1 mb-2 mt-3">
                {"Date Of Birth"}
                <span className="ml-1 text-red-600">*</span>
            </p>
            <div className="flex w-full  gap-4">

                {/* Date Dialog list */}
                <DateInput type="Day" placeholder={"Day"} setDay={setDay} />
                <DateInput type="Month" placeholder={"Month"} setMonth={setMonth} />
                <DateInput type="Year" placeholder={"Year"} setYear={setYear}/>
            </div>

        </div>
    )
}

export default DateInputs;