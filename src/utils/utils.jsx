import { useState } from "react"

const useForm = () => {
        const [value, setValue] = useState({email: '', password: ''});
        const handleChange = ({target}) => {
            setValue(prev => ({...prev, [target.name]:target.value}))
        }
        return {value, handleChange}
    }

export  {useForm};