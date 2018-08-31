class Toggle extends React.Component{
    constructor(props) {
        super(props);
        this.test=this.test.bind(this);
        
        this.state={
            vis : false
        };
    }
    test () {
        this.setState ( (prevState) => {
            return {
                vis:!prevState.vis
            };
    
         }); 
    }
    
    
             render () {
                 return (
                     <div>
                         <h1>Visibility toggle</h1>
                         <p>{this.state.vis}</p>
                         <button onClick={this.test}>
                        { this.state.vis ?'Hide details' :'Show details'}
                        </button>
                        { this.state.vis  && (
                        <div>
                        <p>here are some details</p>
                        </div>
             
                         )}
                     </div>

                 );
             }
}

ReactDOM.render(<Toggle />,document.getElementById('app'));








/*console.log("buldit running");

let vis=false;
const text = () => {
    vis=!vis;
    render();
}


var appRoot=document.getElementById('app');

const render =() => {
    const temp = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={text}>
              { vis?'Hide details' :'Show details'}
            </button>
            { vis  && (
              <div>
                <p>here are some details</p>
              </div>
             
            )}
            
        </div>
    );

    ReactDOM.render(temp,appRoot);
}

render();*/