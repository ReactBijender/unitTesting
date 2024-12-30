import { useState } from "react";
const useFormValidataion = (data, validation) =>{
    // export default function useFormValidataion(){
    const [value, setValues] =  useState(data); 
    const [errors, setErrors] = useState(data);
    const handleChange =(e)=>{
        setValues((prevValues)=>({...prevValues, [e.target.name]:e.target.value}));        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(validation(value));
    }
    return [value, handleChange, handleSubmit, errors]
}
export default useFormValidataion;