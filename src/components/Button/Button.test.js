import { render, screen } from "@testing-library/react";
import {Button} from '../../components';

test('render button with text', () => {
    render(<Button>Teste</Button>);
    const buttonEl = screen.getByRole('button');
        
    expect(buttonEl).toBeInTheDocument();
});