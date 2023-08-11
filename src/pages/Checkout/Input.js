import { useContext, useEffect } from "react";
import { useState } from "react";
import Context from "../../context/Context";

const Input = ( {content} ) => {
    const { buttonPressed, setButtonPressed, validateInput, validateAllInputs } = useContext(Context)
    const {label, placeholder, isLarge, id} = content;
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("cant be empty")
    const [input, setInput] = useState("");
    const [isValid, setIsValid] = useState(false)

    const handleChange = (event) => {
      setInput(event.target.value)
      setError(false)
      setButtonPressed(false)
      handleErrorText(event.target.value)
    };

    const numberPattern = /^\d+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^\+[0-9]+$/;

    const handleErrorText = (input) => {
      if(input === "") {
        setErrorText("cant be empty")
        setIsValid(false)
      } else {
        if(id === 2) {
          if(!validateInput(input, emailPattern)) {
            setErrorText("must be valid email")
            setIsValid(false)
          } else {
            setIsValid(true)
          }
        } else if(id === 3) {
          if(!validateInput(input, phonePattern)) {
            setErrorText("must be valid phone number")
            setIsValid(false)
          } else {
            setIsValid(true)
          }
        } else if((id === 5 || id === 8 || id === 9)) {
          if(!validateInput(input, numberPattern)) {
            setErrorText("must contain numbers")
            setIsValid(false)
          } else {
            setIsValid(true)
          }
        } else {
          if(validateInput(input, numberPattern)) {
            setErrorText("must contain letters")
            setIsValid(false)
          } else {
            setIsValid(true)
          }
        }
      }
    };

    useEffect(() => {
      if(buttonPressed) {
        input === "" || !isValid ? setError(true) : setError(false)
      }
    }, [buttonPressed, input]);

    useEffect(() => {
      if(buttonPressed) {
        validateAllInputs(id, isValid)
      }
    }, [buttonPressed, id, isValid]);

   return (
    <form className={`${isLarge ? "w-full" : "w-[280px] md:w-[309px]"} flex flex-col gap-[9px]`}>
        <div className="flex items-center justify-between text-[12px] leading-normal tracking-[-0.214px]">
          <label className={`${error ? "text-[#CD2C2C]" : "text-[#000]"} font-bold`}>{label}</label>
          {error && <label className="font-medium text-[#CD2C2C]">{errorText}</label>}
        </div>
        <input 
          placeholder={placeholder} 
          className={`${error ? "border-[2px] border-[#CD2C2C]" : "border border-[#CFCFCF] hover:border-[#D87D4A] focus:border-[#D87D4A]"} cursor-pointer outline-none w-full h-[56px] px-[24px] flex-shrink-0 rounded-lg placeholder:opacity-40 text-[14px] font-bold leading-normal tracking-[0.25px]`}
          onChange={(event) => {handleChange(event)}}
        >
        </input>
    </form>
  )
}

export default Input