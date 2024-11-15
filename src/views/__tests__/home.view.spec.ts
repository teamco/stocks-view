import { render, fireEvent, waitFor } from '@testing-library/vue';
import { vi } from 'vitest'

import HomeView from '../home.view.vue';
import { store } from '../../store/store';

describe('HomeView', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders search bar and tiles wrapper', async () => {
    const { getByPlaceholderText, getAllByRole } = render(HomeView);

    await waitFor(() => {
      expect(getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    setTimeout(() => {      
      expect(getAllByRole('tile')).toHaveLength(3); // assuming only one stock matches 'apple'
    }, store.loadingTimeout);

  });

  it('filters stocks based on input value', async () => {
    const { getByPlaceholderText, getAllByRole } = render(HomeView);

    const input = getByPlaceholderText('Search...');    

    setTimeout(() => {
      fireEvent.update(input, 'apple');
      expect(getAllByRole('tile')).toHaveLength(1); // assuming only one stock matches 'apple'
     }, store.loadingTimeout);         
  });

  it('shows all stocks when "Show all" button is clicked', async () => {
    const { getByText, getAllByRole } = render(HomeView);

    setTimeout(() => {
      const showAllButton = getByText('Show all');
      fireEvent.click(showAllButton);
      expect(getAllByRole('tile')).toHaveLength(store.stocks.length);
     }, store.loadingTimeout);   
  });
});