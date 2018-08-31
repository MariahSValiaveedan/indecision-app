class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addone=this.addone.bind(this);
        this.minusone=this.minusone.bind(this);
        this.reset=this.reset.bind(this);
        this.state={
            count : 0
        };
    }
    componentDidMount () {
        const stringcount=localStorage.getItem('count');
        const count=parseInt(stringcount,10);

        if(!isNaN(count)) {
            this.setState( () => ( {count}) )
        }
    }

    componentDidUpdate(prevprops,prevState) {
        if(prevState.count!==this.state.count)
        {
            localStorage.setItem('count',this.state.count);
        }

    }
    
    addone () {
        //console.log('addone');
        this.setState ( (prevState) => {
           return {
               count:prevState.count+1
           }

        });    
    }


    minusone() {
        //console.log('minus1');
        this.setState ( (prevState) => {
            return {
                count:prevState.count-1
            }
 
         }); 
            
    }

    reset () {
       // console.log('reset');
       this.setState ( () => {
           return {
               count:0
           };
       });
    }
    render() {
       

        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.addone}>+1</button>
                <button onClick={this.minusone}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}



ReactDOM.render(<Counter  />,document.getElementById('app'));











/*let count=0;
const someid="myidhere";
const addone = () => {
    count++;
    //console.log('addone',count);
    renderCounterApp();
}

const minusone = () => {
    count--;
   // console.log('minusone');
   renderCounterApp();
}

const reset = () =>
{    count=0;
    //console.log('reset');
    renderCounterApp();
}

//console.log(templatetwo);





const renderCounterApp = () => {
    const templatetwo = (
        <div>
            <h1>count:{count}</h1>
            <button onClick={addone}>+1</button>
            <button onClick={minusone}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templatetwo,appRoot);
    
}

renderCounterApp();*/