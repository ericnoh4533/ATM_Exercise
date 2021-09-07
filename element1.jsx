const App = () =>{
    let product = {name: "pear", cost: 2, inStock: 7};
    let {name, inStock} = product;
    let item = {name, inStock};
    const handler = () => alert(`name: ${item.name} instock: ${item.inStock}`);
    return <button onClick={handler}>Click Me</button>;
}

ReactDOM.render(<App />, document.getElementById("root"));