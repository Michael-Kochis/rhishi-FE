import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the gym barbell logo at the top of App component', () => {
  render(<App />);
  const afLogo = screen.getByAltText('gym barbell');
  expect(afLogo).toBeInTheDocument();
});
