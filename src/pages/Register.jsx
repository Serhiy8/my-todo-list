import { Link } from "react-router-dom";
import { SectionSt, Text, TextEmail, TextPassword } from "./Auth.styled";
import {useForm} from "../utils/utils";
import { signup } from "../supabaseServices/supabaseClient";
import { toast } from "react-toastify";
import { BlurContainer } from "../utils/Styles.styled";

const Register = () =>{

    const {value, handleChange} = useForm();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(value.email.trim() === '' || value.password.trim() === ''){
            toast.info("Fields can't be empty.");
            return;
        }

        const error = await signup(value);
        if(error){
            toast.error(error.message);
            console.log(error);
            return;
        }

        toast.success("Registration successful!");
       
    }

    return(
    <SectionSt>
        <div>
            <p>Registration</p>
            <form onSubmit={handleSubmit}>
                <label>                    
                    <input type="email" name="email" onChange={handleChange}/>
                    <TextEmail $value={value.email}>Username</TextEmail>
                </label>
                <label>                    
                    <input type="password" name="password" onChange={handleChange}/>
                    <TextPassword $value={value.password}>Password</TextPassword>
                </label>
                <button type="submit">Register</button>
            </form>
            <Text>Already have an account? <Link to='/'>Login</Link></Text>
        </div>
    </SectionSt>
    )
}

export default Register;