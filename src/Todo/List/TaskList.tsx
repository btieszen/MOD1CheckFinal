//import React from 'react';
import TaskListStyle from './TaskList.style';
import { Checkbox, FontIcon, Stack } from '@fluentui/react';
//import {initializeIcons } from '@fluentui/font-icons-mdl2';
import  { ActionTypeEnum, ITask } from '../Types';
import { useContext } from 'react';
import { TodoContext } from '../TodoProvider';
import TodoString from '../String.json';
import TaskDescription from './TaskDescription';

type Props={
    setEditTask : (taskId : string) => void
  }

const TaskList = ({ setEditTask } : Props) =>{
const {activeTasks,dispatch} = useContext(TodoContext);

const onTaskDelete=(id:string)=>{
    if(window.confirm(TodoString.deleteConfirm))
    dispatch({type:ActionTypeEnum.Delete,data: { id }});
};


const onRenderCell = (task: ITask) => {

    return (
        <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
            <Stack horizontal style={{width:"85%"}}>
                <Checkbox/>
                {task.title}
            </Stack>

            <Stack horizontal style={{width:"15%"}}>
                <TaskDescription task={task}/>
                 
                <FontIcon iconName="EditNote" className={TaskListStyle.iconStyle}
                onClick={() => {
                    setEditTask(task.id)
                }}/>

                <FontIcon iconName="Delete" className={TaskListStyle.iconStyle}
                     onClick={() => onTaskDelete(task.id)}
                   />
            </Stack>
        </Stack>
   );
};

return <div>{activeTasks.map(onRenderCell)}</div>
};

export default TaskList;