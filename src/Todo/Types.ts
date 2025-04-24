import { Dispatch } from "react";

export enum PivotKeysEnum {
    Tasks = "Tasks",
    TaskForm ="TaskForm",
 
};
export interface ITask {
    id: string;
    title: string;
    description?: string;
    isFav :boolean
};

export interface ITodoContext {
    activeTasks: ITask[]
    dispatch :Dispatch<any>
}
export interface ITodoState {
    activeTasks: ITask[]
};

export enum ActionTypeEnum{
    Add,
    Delete,
    Update
   
}

export type IReducerAction = IAddAction | IDeleteAction  | IUpdateAction

export interface IAddAction{
    type:ActionTypeEnum.Add;
    data:ITask;

}

export interface IDeleteAction{
    type:ActionTypeEnum.Delete;
    data:{id:string};
}

export interface IUpdateAction{
    type:ActionTypeEnum.Update,
    data:ITask;
}
