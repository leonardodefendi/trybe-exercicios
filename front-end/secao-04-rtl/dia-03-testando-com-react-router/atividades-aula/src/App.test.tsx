
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import App from './App';

it('Renderiza texto da página inicial', async() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
  const linkAbout = screen.getByRole('link', {name:/Sobre/i})
  await userEvent.click(linkAbout);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
  
  // const aboutLink = screen.getByRole('link', { name: /Sobre/i});
  // await userEvent.click(aboutLink);
  // expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
})