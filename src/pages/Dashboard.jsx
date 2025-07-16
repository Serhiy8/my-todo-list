import { useEffect, useState, useContext } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import TaskCard from "../components/TaskCard"
import FormAddTask from "../components/FormAddTask"
import { SectionDB } from "./Dashboard.styled"
import { getTasks, addTask, updateTask } from "../supabaseServices/supabaseTable"
import SessionContext from "../supabaseServices/sessionContext"


const initialState = [{
    id: 'id-1',
    user_id: 'user-1',
    task: 'learn react',
    status: false,
},{
    id: 'id-2',
    user_id: 'user-1',
    task: 'learn js',
    status: true,
},{
    id: 'id-3',
    user_id: 'user-1',
    task: 'learn HTML',
    status: true,
},{
    id: 'id-4',
    user_id: 'user-1',
    task: 'learn node.js',
    status: false,
}]

const Dashboard = () => {
    const {user} = useContext(SessionContext);
    const [dataTask, setDataTask] = useState(initialState || []);

    const fetchData = async () => {
            const data = await getTasks();
            if(data.error){
                console.log(data.error);
                return;
            }
            const filterById = data.sort((firstEl, secondEl) => secondEl.id - firstEl.id);
            setDataTask(filterById);
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
        if(res.status === 204){
            fetchData()
    }
    }

    return(
        <SectionDB>
            <div className="container">
                <Header />
                <Sidebar dataTask={dataTask}/>
                <FormAddTask onSubmit={takeNewTask}/>
                <TaskCard dataTask={dataTask} statusChange={onStatusChange}/>
            </div>
        </SectionDB>
    )
}

export default Dashboard;