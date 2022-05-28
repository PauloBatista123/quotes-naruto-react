import styled from 'styled-components';
import { string, func } from 'prop-types';
import {Button} from '../../components'

export const Quotes = ({ quote, speaker, onUpdate }) => {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>{speaker}</Speaker>
            <Button onClick={onUpdate}>Outro Teste</Button>
        </Wrapper>
    )
};

//tipagem de variavies
Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
}

//css
const Wrapper = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    align-items:center;
`;

const Quote = styled.p`
    font-size: 2em;
    flex: 1;
    margin: 0;
`;

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`;