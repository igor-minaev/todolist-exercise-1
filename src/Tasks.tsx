import React from 'react';

type TasksPropsType = {
    data: DataType
}

type DataType = {
    title: string
    tasks: TaskType[]
    students: string[]
}

type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}

export const Tasks = (props: TasksPropsType) => {
    const tasksList = props.data.tasks.map(t => {
        return (
            <li key={t.taskId}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
            </li>
        )
    })
    const studentsList = props.data.students.map(s => {
        return (
            <li key={s}>{s}</li>
        )
    })
    return (
        <div>
            <h3>{props.data.title}</h3>
            <ul>
                {tasksList}
            </ul>
            <ul>
                {studentsList}
            </ul>

        </div>
    );
};

