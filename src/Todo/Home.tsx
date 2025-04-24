import { useState } from "react";
import HomeStyle from "./Home.style";
import { Label, Pivot, PivotItem, Stack } from "@fluentui/react";
import { ITask, PivotKeysEnum } from "./Types";
import TodoString from "./String.json"
import TaskList from "./List/TaskList";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import TodoProvider from "./TodoProvider";
import TaskForm from "./List/TaskForm/TaskForm";
initializeIcons();


const Home = () => {

  const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.Tasks);
  const [editTaskId, setEditTaskId] = useState<string | null>(null);

  const editTask = (id: string) => {
    setEditTaskId(id)
    setSelectedKey(PivotKeysEnum.TaskForm)
  }
  return(
     <Stack className={HomeStyle.todoContainer} >
    <TodoProvider>

      <header className={HomeStyle.headerStyle}>
        <h2> {TodoString.header}</h2>
      </header>

      <Stack className={HomeStyle.pivotContainer}>

        <Pivot
          selectedKey={String(selectedKey)}
          styles={{ root: HomeStyle.pivotRoot }}
          onLinkClick={(item?: PivotItem) => {
            if(item?.props.itemKey !== PivotKeysEnum.TaskForm){
              setEditTaskId(null);
            }
            setSelectedKey(item?.props.itemKey || PivotKeysEnum.Tasks);
          }}
        >
          <PivotItem
            headerText={TodoString.pivots.tasksTab}
            itemKey={PivotKeysEnum.Tasks}
          >

            <TaskList setEditTask={editTask} />
          </PivotItem>
          <PivotItem
            headerText={TodoString.pivots.taskFormTab}
            itemKey={PivotKeysEnum.TaskForm}
          >
            <TaskForm editTaskId={editTaskId} />

          </PivotItem>


        </Pivot>
      </Stack>
    </TodoProvider>
  </Stack >
  );

};
export default Home;