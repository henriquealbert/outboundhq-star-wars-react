import { QueryClient, QueryClientProvider } from 'react-query';

import { RoutesComponent } from 'Routes';

import 'styles/global.css';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesComponent />
    </QueryClientProvider>
  );
};
