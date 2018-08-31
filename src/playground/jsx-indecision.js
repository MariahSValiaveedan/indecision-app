console.log('App.js is running');

const book={
    title:'happy',
    subtitle:'book',
    options:[]
};

const onFormSubmit = (e) =>
{
   e.preventDefault();

  // console.log("form submitted");
  const option=e.target.elements.option.value;


  if(option)
  {
      book.options.push(option);
      e.target.elements.option.value='';
      renderOptionApp();
  }
};

const reset = () => {
    book.options=[];
    renderOptionApp();
}

const onMakeDecision = () => {
    const randomNum=Math.floor(Math.random()*book.options.length);
    const option=book.options[randomNum];
    alert(option);
    //console.log(randomNum);
}

const numbers=[55,101,1000];

var appRoot=document.getElementById('app');


const renderOptionApp =() =>{
    const template=(
        <div>
           <h1>{book.title }</h1>
           {book.subtitle && <p> {book.subtitle} </p>}
            <p>{book.options.length>0? "here are your options" : "No options" }</p>
            <button disabled={book.options.length===0} onClick={onMakeDecision}>what shoud i do?</button>
            <button onClick={reset}>Remove All </button>
            
           <ol>
               {
               book.options.map((option) => {
                   return <li key={option}>{option}</li>
               })
            }
           </ol>  
           <form onSubmit={onFormSubmit}>
              <input type="text" name='option'/>
              <button>Add Option </button>   
           </form>  
        </div>
       );

       ReactDOM.render(template,appRoot);  
}

renderOptionApp();
