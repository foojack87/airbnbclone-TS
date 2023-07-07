import { render, screen, fireEvent } from '@testing-library/react';
import UserMenu from '@/app/components/navbar/UserMenu';
import '@testing-library/jest-dom';

describe('UserMenu', () => {
  it('renders without error', () => {
    render(<UserMenu />);
    expect(screen.getByText('Airbnb your home')).toBeInTheDocument();
  });

  it('renders with closed menu by default', () => {
    render(<UserMenu />);
    const menu = screen.queryByTestId('menu');
    expect(menu).not.toBeInTheDocument();
  });

  it('opens the menu on menu button click', () => {
    render(<UserMenu />);
    const menuButton = screen.getByLabelText('Toggle Menu');
    fireEvent.click(menuButton);
    const menu = screen.getByTestId('menu');
    expect(menu).toBeInTheDocument();
  });

  it('closes the menu on menu button click when it is already open', () => {
    render(<UserMenu />);
    const menuButton = screen.getByLabelText('Toggle Menu');
    fireEvent.click(menuButton); // Open the menu
    fireEvent.click(menuButton); // Close the menu
    const menu = screen.queryByTestId('menu');
    expect(menu).not.toBeInTheDocument();
  });
});
