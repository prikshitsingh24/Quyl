import TableItem from "./tableItem"

export default function Table(){
    return(
        <div className="h-full w-full mt-[52px]">
            <div className="grid grid-cols-[3fr_3fr_6fr_3fr_3fr_1fr]">
                <div className="border-b-[1px] text-[12px] text-tableHeadingColor font-bold pb-5 border-tableBorderColor">
                    Student Name
                </div>
                <div className="border-b-[1px] text-[12px] text-tableHeadingColor font-bold pb-5 border-tableBorderColor">
                    Cohort
                </div>
                <div className="border-b-[1px] text-[12px] text-tableHeadingColor font-bold pb-5 border-tableBorderColor">
                    Courses
                </div>
                <div className="border-b-[1px] text-[12px] text-tableHeadingColor font-bold pb-5 border-tableBorderColor">
                    Date joined
                </div>
                <div className="border-b-[1px] text-[12px] text-tableHeadingColor font-bold pb-5 border-tableBorderColor">
                    Last login
                </div>
                <div className="border-b-[1px] text-[12px] text-tableHeadingColor font-bold pb-5 border-tableBorderColor">
                    Status
                </div>
            </div>
            <div className="grid grid-cols-[3fr_3fr_6fr_3fr_3fr_1fr] items-center">
             <TableItem/>
            </div>
        </div>
    )
}