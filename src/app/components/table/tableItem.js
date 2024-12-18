import Image from "next/image";
import statusGreen from "../../../../public/statusGreen.png";
import statusRed from "../../../../public/statusRed.png"

export default function TableItem(){
    return(
        <>
        <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                    Anshuman Kashyap
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                    AY 2024-25
                </div>
                <div className="border-b-[1px] text-[12px] pb-4 pt-4 border-tableBorderColor">
                    <div className="flex flex-row items-center">
                        <div className="mr-20 bg-background rounded-[6px] pl-2 pr-4 pt-1 pb-1">
                            CBSE 9 Science
                        </div>
                        <div  className="mr-20 bg-background rounded-[6px] pl-2 pr-4 pt-1 pb-1">
                            CBSE 9 Math
                        </div>
                    </div>
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                    17,Nov,2024
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                    17,Nov,2024 4:16 PM
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 ml-3 border-tableBorderColor">
                <Image src={statusGreen} alt="statusGreen"></Image>
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                    Anshuman Kashyap
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                    AY 2024-25
                </div>
                <div className="border-b-[1px] text-[12px] pb-4 pt-4 border-tableBorderColor">
                    <div className="flex flex-row items-center">
                        <div className="mr-20 bg-background rounded-[6px] pl-2 pr-4 pt-1 pb-1">
                            CBSE 9 Science
                        </div>
                        <div  className="mr-20 bg-background rounded-[6px] pl-2 pr-4 pt-1 pb-1">
                            CBSE 9 Math
                        </div>
                    </div>
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                    17,Nov,2024
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                    17,Nov,2024 4:16 PM
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 ml-3 border-tableBorderColor">
                <Image src={statusRed} alt="statusRed"></Image>
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                    Anshuman Kashyap
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                    AY 2024-25
                </div>
                <div className="border-b-[1px] text-[12px] pb-4 pt-4 border-tableBorderColor">
                    <div className="flex flex-row items-center">
                        <div className="mr-20 bg-background rounded-[6px] pl-2 pr-4 pt-1 pb-1">
                            CBSE 9 Science
                        </div>
                        <div  className="mr-20 bg-background rounded-[6px] pl-2 pr-4 pt-1 pb-1">
                            CBSE 9 Math
                        </div>
                    </div>
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                    17,Nov,2024
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                    17,Nov,2024 4:16 PM
                </div>
                <div className="border-b-[1px] text-[12px] pb-5 pt-5 ml-3 border-tableBorderColor">
                <Image src={statusGreen} alt="statusGreen"></Image>
                </div>
        
        </>
    )
}