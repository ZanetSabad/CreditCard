import "./style.css"
import { useRef, useEffect, useState } from "react"


const CreditCard = () => {

    const [age, setAge] = useState();

    const inputsRef = useRef({
      firstInput: null,
      secondInput: null,
      thirdInput: null,
      fourthInput: null,
    })
  
    //focus na inputy dle podmínek
    const changeFocus = (e) => {
      const currentInput = e.target
  
        //porovnání currentInputu a inputsRef
      if (currentInput === inputsRef.current.firstInput && currentInput.value.length === 4) {
        inputsRef.current.secondInput.focus()
      } else if (currentInput === inputsRef.current.secondInput && currentInput.value.length === 4) {
        inputsRef.current.thirdInput.focus()
      } else if (currentInput === inputsRef.current.thirdInput && currentInput.value.length === 4) {
        inputsRef.current.fourthInput.focus()
      }
    }
  
    useEffect(() => {
      inputsRef.current.firstInput.focus()
    }, [inputsRef.current.firstInput])
  
    //Funkce umožňující psát pouze čísla
    const onlyNumbers = (e) => {
        if(isNaN(e.key) && e.key !== 'Backspace' || e.key === " ") {
          e.preventDefault();
        }
      }
    
  
    return (
      <form id="credit-card-inputs">
        <div>
          <input type="text" maxLength="4" ref={HTMLInputElement => inputsRef.current.firstInput = HTMLInputElement} onChange={changeFocus} onKeyDown={onlyNumbers} />
          <input type="text" maxLength="4" ref={HTMLInputElement => inputsRef.current.secondInput = HTMLInputElement} onChange={changeFocus} onKeyDown={onlyNumbers} />
          <input type="text" maxLength="4" ref={HTMLInputElement => inputsRef.current.thirdInput = HTMLInputElement} onChange={changeFocus} onKeyDown={onlyNumbers}/>
          <input type="text" maxLength="4" ref={HTMLInputElement => inputsRef.current.fourthInput = HTMLInputElement} onChange={changeFocus} onKeyDown={onlyNumbers}/>
        </div>
      </form>
    )
  }
  

export default CreditCard;
