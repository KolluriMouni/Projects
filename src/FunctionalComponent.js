
function FunctionalComponent(props){
    console.log(props)
    return(
        <div>
        <p>This is Functional Component Transfer the data by using props</p>

        <p>Age: {props.age},Gender: {props.Gender}</p>
        </div>
        
    );
}
export default FunctionalComponent;