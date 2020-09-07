import React from 'react';
import PageLayout from './layouts/PageLayout';
import Counter from './containers/Counter';
import CacheBuster from './CacheBuster';

export const App = () => {
  return (
    <CacheBuster>
      {({ loading, isLatestVersion, refreshCacheAndReload }) => {
        if (loading) return null;
        if (!loading && !isLatestVersion) {
          refreshCacheAndReload();
        }

        return (
          <PageLayout>
            <Counter />
          </PageLayout>
        );
      }}
    </CacheBuster>
  );
};

export default App;
