class Greeting extends react.Component {
    render() {
        return <h1>Hello World</h1>;
    }
};

ReactDOM.render(
    <Greeting />,
    document.getElementById('class-component')
);