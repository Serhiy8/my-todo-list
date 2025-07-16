import { logout } from "../supabaseServices/supabaseClient";
import { Thumb, List, FirstEl } from "./Header.styled";

const Header = () => {
    
    return(
        <Thumb>
            <List>
                <FirstEl><p>Dashboard</p></FirstEl>
                <li><button type="button" onClick={() => logout()}>
                    <svg>
                        <use href="./img/log-out.svg"></use>
                    </svg>
                    Logout
                    </button></li>
                <li><div style={{width: '30px', height: '30px', backgroundColor: "black"}}></div></li>
            </List>
        </Thumb>
    )
}

export default Header;