function Footer({tasks, filters, setFilters, handleDeleteCompleted}){
    return (
        <div className='buttons'>
            <div>
                {tasks.filter((task) => !task.status).length} items left
            </div>
            <div>
                <button className={filters === 'all' ? 'filter-active' : ''} onClick={() => setFilters('all')}>All</button>
                <button className={filters === false ? 'filter-active' : ''} onClick={() => setFilters(false)}>Active</button>
                <button className={filters === true ? 'filter-active' : ''} onClick={() => setFilters(true)}>Completed</button>
            </div>

            {tasks.some((task) => task.status) && (
                <button className='delete-btn' onClick={handleDeleteCompleted}>Clear completed</button>
            )}
        </div>
    )
}


export default Footer;
