import { List } from "./FilterBtns.styled";

const FilterBtns = ({isActive}) => {
    return(
        <List>
            <li><button type="button" onClick={isActive}>All</button></li>
            <li><button type="button" onClick={isActive}>Active</button></li>
            <li><button type="button" onClick={isActive}>Completed</button></li>
        </List>
    )
}

export default FilterBtns;