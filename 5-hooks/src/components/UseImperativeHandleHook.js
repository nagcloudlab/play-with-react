
import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";


const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        },
    }));

    return (
        <>
            <button>Button From Child</button>
            {toggle && <span>Toggle</span>}
        </>
    );
});

function UseImperativeHandleHook() {
    const buttonRef = useRef(null);
    return (
        <div>
            <button
                onClick={() => {
                    buttonRef.current.alterToggle();
                }}
            >
                Button From Parent
            </button>
            <Button ref={buttonRef} />
        </div>
    );
}

export default UseImperativeHandleHook;