import React,{Fragment} from "react";

class FragmentElement extends React.Component{
    render(){
        return(
        //   <>
          <Fragment >
            <h3>This is Fragment Class</h3>
            {/* <hr></hr> */}
             <td>React</td>
            <td>Angular</td>
            <td>JS</td>
            <td>JQuery</td>
            </Fragment>
        //   </>
           
        )
    }
}
export default FragmentElement;