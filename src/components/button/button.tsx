import { FaCircle } from "react-icons/fa"

interface ButtonProps{
  text:string;
}

function Button({ text }: ButtonProps) {
  return (
    <div>
        <div>
            <button type="button" className="text-black bg-greenColor font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 flex gap-4 items-center">{text}         
                <FaCircle className="bg-black rounded-full"/>
            </button>
        </div>
       
    </div>
  )
}

export default Button