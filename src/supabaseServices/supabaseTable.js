import supabase from "./supabase";

const getTasks = async () => {
    const { data, error } = await supabase
  .from('todolist')
  .select();
  if(error){
    return error;
  }
  return data;
}
const addTask = async (newTask) => {
    const res = await supabase
  .from('todolist')
  .insert(newTask);
  if(res.error){
    return res.error;
  }
  return res;
}

const updateTask = async (task, id) => {
    const res = await supabase
  .from('todolist')
  .update(task)
  .eq('id', id)
  if(res.error){
    return res.error;
  }
  return res;
}

const filterTasks = async (status) => {
   const { data, error } = await supabase
  .from('todolist')
  .select()
  .neq('status', status)
  if(error){
    return error;
  }
  return data;
}

export {getTasks, addTask, updateTask, filterTasks};

