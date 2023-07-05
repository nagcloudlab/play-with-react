import {useEffect, useState} from "react";

function useOnlineStatus() {
    const [isOnline,setIsOnline] = useState(true);
    useEffect(()=>{
        // Set Effect
        const handleOnline=() => setIsOnline(true);
        const handleOffline=() => setIsOnline(false);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            // Clean Effect
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    },[])
    return isOnline
}


function SaveButton() {
    const isOnline=useOnlineStatus()
    function handleSaveClick() {
        console.log('✅ Progress saved');
    }
    return (
        <button className={"btn btn-primary"} disabled={!isOnline} onClick={handleSaveClick}>
            {isOnline ? 'Save progress' : 'Reconnecting...'}
        </button>
    );
}

function StatusBar() {
    const isOnline=useOnlineStatus()
    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function UseCustomHook(){
    return (
        <div>
            Custom Hook
            <hr/>
            <SaveButton/>
            <hr/>
            <StatusBar/>
        </div>
    )
}

export default UseCustomHook;