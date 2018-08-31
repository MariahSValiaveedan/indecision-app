

class IndecisionApp extends React.Component {
    constructor (props) {
        super(props);
        this.handledeleteoption=this.handledeleteoption.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handlepick=this.handlepick.bind(this);
        this.handledeleteoptionsingular=this.handledeleteoptionsingular.bind(this);
        this.state = {
            options:[]
        }
    }

    componentDidMount() {
        try {
        const json=localStorage.getItem('options');
        const options=JSON.parse(json)
        if(options ) {

        
        this.setState ( () => ({
              options
        }));
    }
    } catch(e) { }
}   
    componentDidUpdate(prevPros,prevstate) {
        if(prevstate.options.length!==this.state.options.length)
        {
          const json=JSON.stringify(this.state.options)  
          localStorage.setItem('options',json);
        }
    }

    componentWillUnmount () {

    }
    
    /*handledeleteoption () {
        this.setState ( () => {
            return {
                options:[]
            };
        })
    }*/
    
    handledeleteoption () {
    this.setState( () => ({
        options :[]
    }));
    }   

    handledeleteoptionsingular (optiontoremove) {
        //console.log('hdo',option);
        this.setState ( (prevstate) =>( {
            options:prevstate.options.filter ( (option) => {
                return optiontoremove !== option ;
            })
        }));
    }
    handlepick () {
        const randomNum=Math.floor(Math.random()*this.state.options.length);
        const option=this.state.options[randomNum];
        alert(option);
        //console.log(randomNum);
    }
    

    handleAddOption (option) {
       // console.log(option);
       if(!option) {
           return 'enter valid value to option';
       }
       else if (this.state.options.indexOf(option)>-1)
       {
           return 'option already exist';
       }
       
       this.setState( (prevstate) =>( {
           
               options : prevstate.options.concat(option)
           
       }));
    }
    render() {
        //const title='Indecision';
        const subtitle='Put your life in the hands of a computer';
        //const options=['Thing1','Thing2','Thing3'];
        return (
            <div>
               <Header  subtitle={subtitle} />
                <Action 
                hasoptions={this.state.options.length > 0}
                handlepick={this.handlepick}
                 />
                <Options 
                 options={this.state.options}
                 handledeleteoption={this.handledeleteoption}
                 handledeleteoptionsingular={this.handledeleteoptionsingular}
                />
                <Addoption
                 handleAddOption={this.handleAddOption}
                /> 
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options :[]
}
const Header = (props) => {
    return (
        <div>
            
            <h1>{props.title}</h1>
            { props.subtitle && <h2>{props.subtitle}</h2>}
         </div>     
     );
}

Header.defaultProps = {
    title : 'Indecision '
};
/*class Header extends React.Component {
    render() {
        //console.log(this.props);
        return (
           <div>
               <h1>{this.props.title}</h1>
               <h2>{this.props.subtitle}</h2>
            </div>     
        );
    }
}*/

const Action = (props) => {
    return (
        <div>

             <button 
             onClick={props.handlepick}
             disabled={!props.hasoptions}
             >
             what should i do?</button>
        </div>     
     ); 
}

/*class Action extends React.Component {
    
   render() {

       return (
          <div>

               <button 
               onClick={this.props.handlepick}
               disabled={!this.props.hasoptions}
               >
               what should i do?</button>
          </div>     
       );
   }
}*/
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handledeleteoption}>Remove All </button>
            {props.options.length===0 && <p>enter an option</p>}
            {   
               props.options.map((option) => (
               <Option 
               key={option} 
               optionText={option}
               handledeleteoptionsingular={props.handledeleteoptionsingular}
               />
            ) )

            }
                
        </div>

    );
}
/*class Options extends React.Component {
    

    
    render() {
        return (
            <div>
                <button onClick={this.props.handledeleteoption}>Remove All </button>
                {   
                   this.props.options.map((option) => <Option key={option} optionText={option}/>)

                }
                    
            </div>

        );
    }
}*/
const Option = (props)=> {
    return (
        <div>
            {props.optionText}
            <button 
            onClick={ (e) => {
                props.handledeleteoptionsingular(props.optionText)
            }}
            >
            Remove
            </button>
        </div>
    );
}
/*class Option extends React.Component {
  render() {
      return (
          <div>
              {this.props.optionText}
          </div>
      );
  }
}*/

class Addoption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error : undefined
        }
    }
    
    handleAddOption (e) {
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error=this.props.handleAddOption(option);
        this.setState( () => ({error : error }));
        
        if(!error) {
            e.target.elements.option.value ='';
        }
        
    }
    render() {
        return (
            <div>
                {this.state.error  && <p>{this.state.error}</p>}         
                <form onSubmit = {this.handleAddOption} >
                <input type="text" name='option'/>
                <button>AddOption</button>
                </form>
            </div>

        );
    }
}
 



/*const User =  (props) => {

    return (
        <div>
            <p>name:{props.name}</p>
            <p>age:</p>
        </div>
    );

};*/

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));