import { Link } from "react-router-dom";
import { SectionSt, Text, TextEmail, TextPassword } from "./Auth.styled";
import {useForm} from "../utils/utils";
import { toast } from "react-toastify";
import { signin } from "../supabaseServices/supabaseClient";

const Login = () =>{

    const {value, handleChange} = useForm();

    const handleSubmit = async (e) => {
            e.preventDefault();
            if(value.email.trim() === '' || value.password.trim() === ''){
                toast.info("Fields can't be empty.");
                return;
            }
    
            const error = await signin(value);
            if(error){
                toast.error(error.message);
                console.log(error);
                return;
            }
    
            toast.success("Welcome back!");
           
        }

    return(
    <SectionSt>
        <div>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <label>                    
                    <input type="email" name="email" onChange={handleChange}/>
                    <TextEmail $value={value.email}>Username</TextEmail>
                </label>
                <label>                    
                    <input type="password" name="password" onChange={handleChange}/>
                    <TextPassword $value={value.password}>Password</TextPassword>
                </label>
                <button type="submit">Login</button>
            </form>
            <Text>Don't have an account? <Link to='/register'>Register</Link></Text>
        </div>
    </SectionSt>
    )
}

export default Login;