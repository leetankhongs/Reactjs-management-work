import * as types from './../constants/actionType'

var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data? data : [];

const UniqueID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

var myReducer = (tasks = initialState, action)=>{
    
    switch(action.type){
        case types.LIST_ALL:
            return tasks;
        case types.ADD_TASK:{
            var newTask = {
                id: UniqueID(),
                name: action.task.name,
                status: action.task.status
            }
            tasks.push(newTask); 
            localStorage.setItem("tasks",JSON.stringify(tasks));
            return [...tasks];
        }
        default:
            return tasks;
    }
}


export default myReducer;