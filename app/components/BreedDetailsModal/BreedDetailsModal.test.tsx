import {
  screen, render, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchData } from '@/app/helpers';
import { BreedDetailsModal } from './BreedDetailsModal';

jest.mock('@/app/helpers', () => ({
  fetchData: jest.fn(() => ({ message: 'https://test/url.com' })),
}));

const mockedFetchedData = fetchData as jest.MockedFunction<typeof fetchData>;

describe('BreedDetailsModal', () => {
  const mockedHandleClose = jest.fn();
  const mockedAPIUrl = 'https://APIurl.com';

  const props = {
    isOpen: true,
    handleClose: mockedHandleClose,
    apiUrl: mockedAPIUrl,
    breedName: 'testBreedName',
  };

  it('calls API url on "Random photo" button click', async () => {
    render(<BreedDetailsModal {...props} />);

    await waitFor(() => expect(screen.getByRole('button', { name: /Random photo/i })).toBeInTheDocument());

    const randomPhotoButton = screen.getByRole('button', { name: /Random photo/i });

    await userEvent.click(randomPhotoButton);

    expect(mockedFetchedData).toBeCalledWith(mockedAPIUrl);
  });

  it('invokes handleClose on "Close" button click', async () => {
    render(<BreedDetailsModal {...props} />);

    await waitFor(() => expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument());

    const closeButton = screen.getByRole('button', { name: /Close/i });

    await userEvent.click(closeButton);

    expect(mockedHandleClose).toBeCalled();
  });
});
