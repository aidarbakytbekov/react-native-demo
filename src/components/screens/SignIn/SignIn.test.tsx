import {act, fireEvent} from '@testing-library/react-native';
import SignIn from './SignIn';
import {renderWithRedux} from '../../../helpers/testHelpers/renderWithRedux';

it('renders default elements', async () => {
  const {getAllByText, getByPlaceholderText} = renderWithRedux(<SignIn />);

  await act(async () => {
    expect(getAllByText('Sign in').length).toBe(1);
    getByPlaceholderText('Email');
    getByPlaceholderText('Password');
  });
});

it('handles valid input submission', async () => {
  const {getByPlaceholderText, queryAllByText} = renderWithRedux(<SignIn />);

  await act(async () => {
    fireEvent.changeText(getByPlaceholderText('Email'), 'aidar@mail.ru');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
  });
  expect(queryAllByText('This field is required').length).toBe(0);
});
