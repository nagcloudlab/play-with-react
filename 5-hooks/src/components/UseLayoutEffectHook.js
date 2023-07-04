import {useEffect, useLayoutEffect, useRef} from "react";

function UseLayoutEffectHook() {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
        //to change any DOM elements layout before rendering
    }, []);

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);

    return (
        <div className="App">
            <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
        </div>
    );
}

export default UseLayoutEffectHook;