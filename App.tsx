import {toastConfig} from '@configs/toast';
import {Auth} from '@layouts/auth';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import Toast from 'react-native-toast-message';
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 60000, // 1 minute
        staleTime: 3000, // 3 seconds
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Auth />
      <Toast config={toastConfig} />
    </QueryClientProvider>
  );
};

export default App;
