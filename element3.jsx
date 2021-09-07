const App = () => {
    let a = [1, 2, 3, 4];
    const handler = (e) => alert(`button: ${e.target.getAttribute("index")}`);

    let list = a.map((item, index) => {
        return <MyButton index={index} onClick={handler} key={index}></MyButton>;
    });
    return <div>{list}</div>;
}

const MyButton = ({onClick, index}) => {
    let {Button} = ReactBootstrap;
    return <Button index={index} onClick={onClick}>Click Me</Button>;
}

ReactDOM.render(<App />, document.getElementById('root'));