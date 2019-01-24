import React,{Component} from 'react';
import styled from 'styled-components';

const Heading = styled.h3`
    background: red;
`;


class Default extends Component {
   render(){
     return(
       <div>
         <Heading>Page Not Found</Heading>
       </div>
     );
   }
}
export default Default;
