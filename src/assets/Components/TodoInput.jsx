export default function TodoInput({input, setInput, addTodo}){
    return(
        <>
        <input 
            type="text" 
            placeholder="Enter Your Task" 
            value={input}         
            onChange={(e)=> setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
        </>
    )
}    