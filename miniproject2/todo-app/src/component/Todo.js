
const Todo = (props) => {
    return ( 
        <div key={props.id}>
                <p>{props.title}</p>
        </div>
     );
}
 
export default Todo;