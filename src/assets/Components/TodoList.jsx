import Checkbox from "./Checkbox."

export default function TodoList({toDos, deleteTodo}){
    return(
        <>
        <h2>Lists</h2>
        <ul>
        {toDos.map((todo, index) =>(
            <li key={index}> <Checkbox />{''} {todo} {''}
            <button onClick={()=>deleteTodo(index)} className="listBtn">Delete</button>
            {/* if (isChecked===false) {
                li.style.textDecorationLine = 'none';
            }
            else{
                li.style.textDecorationLine = 'line-through';
            } */}
            </li> 
        ))}
        </ul>
        </>
    )
}