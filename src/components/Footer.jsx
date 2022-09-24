import Counter from "./Counter";
import Filters from "./Filters";
import Buttondel from "./Buttondel";

function Footer({tasks, filters, setFilters, handleDeleteCompleted}){
    return (
        <section className='buttons'>
            <Counter tasks={tasks}/>
            <Filters setFilters={setFilters} filters={filters}/>

            {tasks.some((task) => task.status) && (
                <Buttondel handleDeleteCompleted={handleDeleteCompleted}/>
            )}
        </section>
    )
}

export default Footer;
