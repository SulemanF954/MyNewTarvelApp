import Image from "next/image"

type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: "btn_dark_green"
}

const button = ({ type, title, icon, variant }: ButtonProps) => {
    return (
        // <button
        // className={`flexCenter gap-3 rounded-full border ${variant}`}
        //     type={type}>
        //     {icon && <Image src={icon} alt={title} width={24} height={24} />}
        //     <label className="bold-16 whitespace-nowrap">{title}</label>
        // </button>
        <button className="sm-hidden p-4 rounded-full bg-green-500 hover:bg-green-600 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 active:bg-green-700 ...">
            Log In
        </button>
    )
}

export default button
