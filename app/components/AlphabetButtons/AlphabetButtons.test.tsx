import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AlphabetButtons } from './AlphabetButtons';

describe('AlphabetButtons', () => {
  const mockedOnItemClick = jest.fn();

  it('renders component without selected item', () => {
    const props = {
      onItemClick: mockedOnItemClick,
      selectedItem: undefined,
    };

    render(<AlphabetButtons {...props} />);

    const firstButton = screen.getByRole('button', { name: /A/i });
    const lastButton = screen.getByRole('button', { name: /Z/i });
    const heading = screen.getByRole('heading', { name: /Select filter from the list below:/i });

    expect(firstButton).toBeInTheDocument();
    expect(lastButton).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it('renders component with selected item', () => {
    const props = {
      onItemClick: mockedOnItemClick,
      selectedItem: 'C',
    };

    render(<AlphabetButtons {...props} />);

    const firstButton = screen.getByRole('button', { name: /A/i });
    const lastButton = screen.getByRole('button', { name: /Z/i });
    const heading = screen.getByRole('heading', { name: /Selected filter: C/i });

    expect(firstButton).toBeInTheDocument();
    expect(lastButton).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it('invokes onItemClick', async () => {
    const props = {
      onItemClick: mockedOnItemClick,
      selectedItem: 'C',
    };

    render(<AlphabetButtons {...props} />);

    const firstButton = screen.getByRole('button', { name: /A/i });
    await userEvent.click(firstButton);

    expect(mockedOnItemClick).toBeCalled();
  });
});
