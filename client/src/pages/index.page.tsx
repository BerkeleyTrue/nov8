import { NextPage } from 'next';

import { Home } from './Home';
import { AppTitle } from '../components/AppTitle';

const HomePage: NextPage = () => {
  return (
    <>
      <AppTitle subTitle='Home' />
      <Home />
    </>
  );
};

export default HomePage;
