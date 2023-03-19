import Image from "next/image";

export default function Logo (){
    return(
        <>
        <Image
        src={"/assets/logo-img/yori-logo-default.png"}
        alt={"site-logo"}
        height={85}
        width={275}
        />
        </>
    )
}