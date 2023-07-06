import {useSelector} from "react-redux";


function NetworkStatus(){
    const netWorkStatus = useSelector(state => state.networkStatus)
    return (
        <div className={"alert alert-warning"}>
            {netWorkStatus.message}
        </div>
    )
}

export default NetworkStatus