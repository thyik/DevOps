import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders author text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Yik Teng Hie/i);
  expect(linkElement).toBeInTheDocument();
});
