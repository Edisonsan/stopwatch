import React from 'react';
import PageLayout from './layouts/PageLayout';
import Counter from './containers/Counter';

export const App = () => {
  return (
    <PageLayout>
      <Counter />
    </PageLayout>
  );
};

export default App;
