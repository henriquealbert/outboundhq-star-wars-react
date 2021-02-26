import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { RoutesComponent } from 'Routes';

import 'styles/global.css';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesComponent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
