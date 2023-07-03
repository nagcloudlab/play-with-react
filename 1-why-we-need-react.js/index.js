


//-------------------------------------------------
// DOM Api
//-------------------------------------------------

const cardBody = document.querySelector('.card-body');
const greetBtn = document.querySelector('.btn-primary');

greetBtn.addEventListener('click', () => {
    cardBody.innerText = "hello"
    cardBody.style.color = "red"
    cardBody.style.backgroundColor = "yellow"
})


// ----------------------------------------------------------------------------------

const clock1Ele = document.getElementById('clock-1');
const clock2Ele = document.getElementById('clock-2');
const clock3Ele = document.getElementById('clock-3');

function Clock(props) {
    let { timeZone } = props
    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <span className="badge bg-primary">{new Date().toLocaleTimeString('en-US', { timeZone: timeZone })}</span>
            </div>
        </div>
    )
}

function ClockGrid() {
    return (
        <div className="card">
            <div className="card-header">World Clock Grid</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <Clock timeZone="Asia/Kolkata" />
                    </div>
                    <div className="col-4">
                        <Clock timeZone="Asia/Dubai" />
                    </div>
                    <div className="col-4">
                        <Clock timeZone="America/New_York" />
                    </div>
                </div>
            </div>
        </div>
    )
}

setInterval(() => {
    ReactDOM.render(<ClockGrid />, document.getElementById('root'));
}, 1000);