import { BlurContainer } from "../utils/Styles.styled";
import ChartStats from "./ChartStats";
import { Thumb, ChartStatsThumb, StatsThumb } from "./Sidebar.styled";

const Sidebar = ({dataTask}) => {

const taskQuantity = dataTask.length || 0;
const taskCompleted = dataTask.reduce((acc, el) => {
    if(el.status === true){
        acc += 1;
    } 
    return acc;
}, 0);

    return(
    <BlurContainer>
        <p>Here are the statistics on your tasks.</p>
        <Thumb>
            <StatsThumb>
                <p>Tasks: {taskQuantity}</p>
                <p>Tasks completed: {taskCompleted}</p>
            </StatsThumb>
            <ChartStatsThumb>
                <ChartStats  completed={taskCompleted} total={taskQuantity}/>
            </ChartStatsThumb>
        </Thumb>
    </BlurContainer>
)
}

export default Sidebar;