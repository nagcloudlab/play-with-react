

function  Comp1(){}

function Comp2(){}

function hof(Comp){
    return function Container(){
        // common logic
        return (
            <div>
              <Comp/>
            </div>
        )
    }
}



const EnhancedComp1=hof(Comp1) // Higher Order Component