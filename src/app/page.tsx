'use client'
import 'react-responsive-modal/styles.css';
import FormModal from './pages/FormModal/FormModal';
import { Provider } from 'react-redux';
import store from './store';

export default function Home() {
  return (
    <Provider store={store}>
      <FormModal />
    </Provider>
  );
}
