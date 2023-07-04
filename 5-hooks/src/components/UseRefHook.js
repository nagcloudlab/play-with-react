import React, {useEffect, useRef, useState} from "react";

function UserRefHook() {
    console.log("UserRefHook:render")

    const [count, setCount] = useState(0)
    const prevCountRef = useRef()
    const inputDOMNodeRef = useRef()


    const increment = () => {
        prevCountRef.current=count
        setCount(prevState => prevState+1)
    }
    // useEffect(()=>{
    //     prevCountRef.current=count // any changes to Ref, will not trigger comp to re-render
    // },[count])

    return (
        <div className={"card"}>
            <div className={"card-header"}>useRef</div>
            <div className={"card-body"}>
                <button onClick={increment} type='button' className='btn btn-primary'>
                    +1
                </button>
                New Count :<span className='ml-auto display-4'>{count}</span>
                Prev Count :<span className='ml-auto display-4'>{prevCountRef.current}</span>
                <hr/>
                <input ref={inputDOMNodeRef}/>
                <hr/>
                <button onClick={e => inputDOMNodeRef.current.focus()}>Focus Input</button>
                <button onClick={e => inputDOMNodeRef.current.value = "Nag"}>Load Text</button>
            </div>
        </div>
    )
}

export default UserRefHook;