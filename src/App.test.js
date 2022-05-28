import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

const response = { speaker: 'speaker', quote: 'test'};

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
      return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app with a button, a quote and a text', () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  const textEl = screen.findByText('p');
  
  expect(buttonEl).toBeInTheDocument;
  expect(imageEl).toBeInTheDocument;
  expect(textEl).toBeInTheDocument;
});

test('calls api on button click and update its text', async () => {
  render(<App></App>)

  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl);

  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInTheDocument();
});

test('calls api on startup and render it response', async () => {
  render(<App />);

  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInTheDocument();
});