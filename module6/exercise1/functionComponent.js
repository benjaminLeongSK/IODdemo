function Greeting(props) {
    return <h1>Hello, {props.name}</h1>;
}
ReactDOM.render(
    <Greeting />,
    document.getElementById("function-component")
)