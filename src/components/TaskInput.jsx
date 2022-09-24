function TaskInput({value, handleInput, handleAddTask}) {
    return (
        <input type="text" placeholder='What needs to be done?' value={value} onChange={handleInput} onKeyUp={handleAddTask}/>
    )
}

export default TaskInput;
