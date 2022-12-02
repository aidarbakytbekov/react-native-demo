import {configureStore} from '@reduxjs/toolkit';
import {allReducers} from '../../store/rootReducer';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
export const renderWithRedux = renderedComponent => {
  const store = configureStore({
    reducer: allReducers,
  });
  return render(<Provider store={store}>{renderedComponent}</Provider>);
};
