import styled from 'styled-components';

const StyledParagrafo = styled.div`
    border: 2px solid black;
    padding: 10px;
    border-radius: 10px;
    margin-right: 50px;
    margin-bottom: 15px;
     margin-left: 50px;
}
    `;

    function Paragrafo(props){
        return(
            <> 
            <StyledParagrafo>{props.txt}</StyledParagrafo>
            <br/>
            </>
        );
    }

    export default Paragrafo; 