import Image from "next/image";

export default function Loader(){
    return(
        <div>
        <Image  src={"/loader.svg"} width={100} height={32}  alt="loader"></Image>
        </div>
    )
}