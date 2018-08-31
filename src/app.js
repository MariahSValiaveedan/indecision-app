import React from'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './component/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render((<IndecisionApp />
     ),document.getElementById('app'));






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



/*class Option extends React.Component {
  render() {
      return (
          <div>
              {this.props.optionText}
          </div>
      );
  }
}*/

