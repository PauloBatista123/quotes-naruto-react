import './App.css';
import naruto from './images/naruto.png'
import styled from 'styled-components'
import { Quotes } from './components';
import { getQuote } from './services';
import { useState, useEffect, useRef } from 'react';
import jutsoSound from './sounds/src_sounds_jutso.mp3'

const audio = new Audio(jutsoSound);

function App() {

  const isMounted = useRef(false);

  const [quoteState, setQuoteState] = useState({quote: 'loading...', speaker: 'loading...'});

  const onUpdate = async () => {
    const quote = await getQuote();

    if(isMounted.current){
      audio.play();
      setQuoteState(quote);
    }

  };

  useEffect(() => {
    isMounted.current = true;

    onUpdate();
    
    return () => { isMounted.current = false }
  }, []);

  return (
    <Content >
      <Quotes 
       {...quoteState}
       onUpdate={onUpdate}></Quotes>
      <NarutoImg src={naruto} alt="Naruto with a kunay"></NarutoImg>
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;

export default App;
