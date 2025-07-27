import { logout } from "../supabaseServices/supabaseClient";
import { Thumb, List, FirstEl } from "./Header.styled";

const Header = () => {
    
    return(
        <Thumb>
            <List>
                <FirstEl><p>Dashboard</p></FirstEl>
                <li><button type="button" onClick={() => logout()}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 20H6C4.89543 20 4 19.1046 4 18L4 6C4 4.89543 4.89543 4 6 4H14M10 12H21M21 12L18 15M21 12L18 9"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Logout
                    </button></li>
                <li><div style={{width: '30px', height: '30px', backgroundColor: "black"}}></div></li>
            </List>
        </Thumb>
    )
}

export default Header;