import { AppContextProvider } from 'contexts/AppContext';
import { QueryClient, QueryClientProvider } from 'react-query';

import { RoutesComponent } from 'Routes';

import 'styles/global.css';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <RoutesComponent />
      </QueryClientProvider>
    </AppContextProvider>
  );
};
