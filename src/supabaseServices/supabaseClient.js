import supabase from "./supabase";

export const signup = async (newUser) => {
    const {error} = await supabase.auth.signUp(newUser);
    if(error){
        return error;
    }
}

export const signin = async (user) => {
    const { error } = await supabase.auth.signInWithPassword(user);
    if(error){
        return error;
    }
}

export const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if(error){
        console.log(error);
        return;
    }
}