import React from 'react';
import Addoption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
   
    state = {
        options:[],
        selectedOption : undefined
    }
    /*constructor (props) {
        super(props);
        this.handledeleteoption=this.handledeleteoption.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handlepick=this.handlepick.bind(this);
        this.handledeleteoptionsingular=this.handledeleteoptionsingular.bind(this);
        
    }*/

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
    
    handledeleteoption =()=> {
    this.setState( () => ({
        options :[]
    }));
    }   

    handleselectedoption = () => {
        this.setState( () => ({
            selectedOption : undefined
        }))
    }

    handledeleteoptionsingular =(optiontoremove)=> {
        //console.log('hdo',option);
        this.setState ( (prevstate) =>( {
            options:prevstate.options.filter ( (option) => {
                return optiontoremove !== option ;
            })
        }));
    }
    handlepick =() => {
        const randomNum=Math.floor(Math.random()*this.state.options.length);
        const option=this.state.options[randomNum];
        this.setState( () => ({
            selectedOption : option
        }));
        
    }
    

    handleAddOption =(option) =>{
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
        const subtitle='Manage your List';
        //const options=['Thing1','Thing2','Thing3'];
        return (
            <div>
               <Header  subtitle={subtitle} />
               <div className='container'>
               <Action 
                hasoptions={this.state.options.length > 0}
                handlepick={this.handlepick}
                 />
                 <div className="widget">
                 <Options 
                 options={this.state.options}
                 handledeleteoption={this.handledeleteoption}
                 handledeleteoptionsingular={this.handledeleteoptionsingular}
                />
                <Addoption
                 handleAddOption={this.handleAddOption}
                />
                 </div>
                 
               </div>
                
                <OptionModal  
                selectedOption={this.state.selectedOption}
                handleselectedoption={this.handleselectedoption}
                /> 
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options :[]
}


Header.defaultProps = {
    title : 'Indecision '
};