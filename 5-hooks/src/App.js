import UseStateHook from "./components/UseStateHook";
import UseReducerHook from "./components/UseReducerHook";
import Todos from "./components/Todos";
import UseEffectHook from "./components/UseEffectHook";
import Posts from "./components/Posts";
import UseContextHook from "./components/UseContextHook";
import UseRefHook from "./components/UseRefHook";
import UseMemo from "./components/UseMemoHook";
import UseCallbackHook from "./components/UseCallbackHook";
import UseLayoutEffectHook from "./components/UseLayoutEffectHook";
import UseImperativeHandleHook from "./components/UseImperativeHandleHook";
import Form from "./components/Form";
import UseCustomHook from "./components/UseCustomHook";

function App() {
    return (
        <div className="container">
            <div className={"display-1"}>React Hooks</div>
            <hr/>
            <UseCustomHook/>
            {/*<Form/>*/}
            {/*<UseImperativeHandleHook/>*/}
            {/*<UseLayoutEffectHook/>*/}
            {/*<UseCallbackHook/>*/}
            {/*<UseMemo/>*/}
            {/*<UseRefHook/>*/}
            {/*<UseContextHook/>*/}
            {/*<Posts/>*/}
            {/*<UseEffectHook/>*/}
            {/*<Todos/>*/}
            {/*<UseReducerHook/>*/}
            {/*<UseStateHook/>*/}
        </div>
    );
}

export default App;
