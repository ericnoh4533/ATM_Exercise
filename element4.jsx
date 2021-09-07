const App = () => {
    let a = [1, 2, 3, 4];
    const handler = (index) => alert(`button: ${index}`);

    let list = a.map((item, index) => {
        return <MyButton onClick={()=>handler(index)} key={index}></MyButton>;
    });
    return <div>{list}</div>;
}

const MyButton = ({onClick}) => {
    let {Button} = ReactBootstrap;
    return <Button onClick={onClick}>Click Me</Button>;
}

ReactDOM.render(<App />, document.getElementById('root'));