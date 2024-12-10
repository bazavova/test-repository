import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  render(<App />);
  const linkElement = screen.getByText((content) =>
  content.includes('Это обновленый текст для проверки деплоя')
  );
  expect(linkElement).toBeInTheDocument();
});
