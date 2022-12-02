import {
  act,
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react-native';
import App from './App';

describe('Login screen', () => {
  it('should go to home page', async () => {
    const page = render(<App />);
    beforeEach(async () => {
      const usernameInput = page.getByPlaceholderText('Email');
      const passwordInput = page.getByPlaceholderText('Password');
      const submitButton = page.getByText('Login');
      await act(async () => {
        fireEvent.changeText(usernameInput, 'aidar@mail.ru');
        fireEvent.changeText(passwordInput, 'password');
        fireEvent.press(submitButton);
      });
      const {getByText} = within(screen.getByTestId('HomeScreen'));
      expect(getByText('HOME')).toBe(1);
    });
  });
});
