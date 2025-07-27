import { useEffect, useState, useContext } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import TaskCard from "../components/TaskCard"
import FormAddTask from "../components/FormAddTask"
import { SectionDB } from "./Dashboard.styled"
import { getTasks, addTask, updateTask, filterTasks } from "../supabaseServices/supabaseTable"
import SessionContext from "../supabaseServices/sessionContext"
import FilterBtns from "../components/FilterBtns"
import { useSearchParams } from "react-router-dom"

const Dashboard = () => {
    const {user} = useContext(SessionContext);
    const [dataTask, setDataTask] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    

    const fetchData = async () => {
            const data = await getTasks();
            if(data.error){
                console.log(data.error);
                return;
            }
            const filterById = data.sort((firstEl, secondEl) => secondEl.id - firstEl.id);
            setDataTask(filterById);
        }

     const activeTasks = async (status) => {
            const data = await filterTasks(status);
            setDataTask(data)
        }

    useEffect(() => {        
        fetchData();
    },[])

    const takeNewTask = async (task) => {
        const newTask = {user_id: user.id, task: task, status: false}
        const {error, status} = await addTask(newTask);
        console.log(error, status)
        if(error){
            console.log(error.message)
        }
        if(status === 201){
            fetchData();
        }
    }

    const onStatusChange = async (updateValue, id) => {
            const res = await updateTask(updateValue, id);
            if(res.status === 204 && searchParams.size === 0){
                fetchData();
            }
            if(res.status === 204 && searchParams.get("status") === "active"){
                activeTasks(true);
            }
            if(res.status === 204 && searchParams.get("status") === "completed"){
                activeTasks(false);
            }
    }



    const onFilterBtnClick = (e) => {
        const key = e.target.textContent;

        switch (key) {
            case "All":
                setSearchParams({});
                fetchData();
                break;
            case "Active":
                setSearchParams({status: "active"});              
                activeTasks(true);
                break;
            case "Completed":
                setSearchParams({status: "completed"});               
                activeTasks(false);
                break;
        
            default:
                break;
        }
    }

    return(
        <SectionDB>
            <div className="container">
                <Header />
                <Sidebar dataTask={dataTask}/>
                <FormAddTask onSubmit={takeNewTask}/>
                <FilterBtns isActive={onFilterBtnClick}/>
                <TaskCard dataTask={dataTask} statusChange={onStatusChange}/>
            </div>
        </SectionDB>
    )
}

export default Dashboard;