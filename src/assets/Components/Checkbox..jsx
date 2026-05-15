import { useState } from "react"

export default function Checkbox(){
    function clickCross(){
        const[isChecked, setIsChecked] = useState(false);
    const handleChange = (e) => {
        setIsChecked(e.target.checked);
    }
    }
    return(
        <input type="checkbox" />
    ) 
}

{/*checked={isChecked} onChange={handleChange} this is placed by input type*/} 