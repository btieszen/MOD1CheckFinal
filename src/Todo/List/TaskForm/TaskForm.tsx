import {
    MessageBar,
    MessageBarType,
    PrimaryButton,
    Stack,
    TextField,
} from "@fluentui/react";
import { useState, useEffect, useContext } from "react";
import useInput from "./useinputs";
import { TodoContext } from "../../TodoProvider";
import { ActionTypeEnum, ITask } from "../../Types";

type Props = {
    editTaskId: string | null
}
const TaskForm = ({ editTaskId }: Props) => {
    const { activeTasks, dispatch } = useContext(TodoContext);

    const title = useInput("");
    const description = useInput("");

    useEffect(() => {
        if (editTaskId) {
            const taskData = activeTasks.find(task => task.id === editTaskId)
            description.set(taskData?.title || "")
            title.set(taskData?.title || "'")
        }
    }, [editTaskId]);

    const [showMessage, setShowMessage] = useState<{
        type: MessageBarType;
        message: string;
    }>({ type: MessageBarType.success, message: "" });

  

    useEffect(() => {
        if (showMessage.message) {
            setTimeout(() => {
                setShowMessage({ type: MessageBarType.success, message: "" })
            }, 1000);
        }
    }, [showMessage.message]);

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const data: ITask = { id: "", title: title.value, description: description.value, isFav: false };
        dispatch({ type: ActionTypeEnum.Add, data });
        setShowMessage({ type: MessageBarType.success, message: "Task Added" });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <TextField label="Title" required {...title} />
            <TextField label="Description" multiline rows={4} {...description} />

            <Stack horizontal tokens={{ childrenGap: 20 }} style={{ marginTop: 20 }}>
                <Stack style={{ width: "80%" }}>
                    {showMessage.message && (
                        <MessageBar messageBarType={MessageBarType.success}>
                            Task Added
                        </MessageBar>
                    )}
                </Stack>

                <Stack style={{ width: "20%" }}>
                    <PrimaryButton type='submit' text="Add Task" />
                </Stack>
            </Stack>
        </form>
    );
};

export default TaskForm;


