import { fireEvent, render, screen } from "@testing-library/react";
import { Quotes } from "./Quotes";

const quote = 'teste quote';
const speaker = 'radom speaker'

test('render received quote, speaker and a button', () => {
    render(<Quotes quote={quote} speaker={speaker} />);

    const quoteEl = screen.getByText(quote);
    const speakerEl = screen.getByText(speaker);
    const buttonEl = screen.getByRole('button');

    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
});

test('calls a calback when button is pressed', () => {
    const callback = jest.fn();

    render(<Quotes quote={quote} speaker={speaker} onUpdate={callback}/>);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    expect(callback).toHaveBeenCalledTimes(1);
});