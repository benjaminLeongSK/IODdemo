import React, {useEffect, useState} from "react";

function HookExample() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Bob");
    const [myArray, setMyArray] = useState([1]);

    useEffect(() => {
        console.log("this runs every time");
    })

    useEffect(() => {
        alert('called after first render');
    }, []);

    useEffect(() => {
        alert('called when value of `endpoint` or `id` changes');
    }, [myArray]);

    useEffect(() => {
        alert('called when value of `endpoint` or `id` changes');
    }, [count, name]);

    return (
            <>
                <h3>This is a Hook example counter = {count} </h3>
                <button onClick={() => setCount(count + 1)}>Click me</button>
                <p>My name is {name} </p>
                <button onClick={() => setName("mike")}>Click me</button>
                <p>{myArray}</p>
                <button onClick={() => setMyArray(myArray.push(myArray.length + 1))}>Click me</button>
            </>
    );
}

export default HookExample