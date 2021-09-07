const App = () => {
    let a = [1, 2, 3, 4];
    const handler = () => alert('Hello World !');

    let list = a.map((item, index) => {
        return <MyButton key={index} onClick={handler}></MyButton>;
    });
    return <>{list}</>;
}

const MyButton = ({onClick}) => {
    let {Button: Abutton} = ReactBootstrap;
    return <Abutton onClick={onClick}>Click Me</Abutton>;
}

ReactDOM.render(<App />, document.getElementById('root'));