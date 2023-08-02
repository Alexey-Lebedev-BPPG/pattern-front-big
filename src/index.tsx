import './app/styles/index.scss';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/App';
import { ErrorBoundary } from './app/providers/ErrorBoundary/ErrorBoundary';
import { StoreProvider } from './app/providers/StoreProvider/ui/StoreProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { ApolloProvider } from './app/providers/ApolloProvider';

const container = document.getElementById('root');

if (!container) throw new Error('Error load app');

const root = createRoot(container);

root.render(
  <Router>
    <StoreProvider>
      <ApolloProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </ApolloProvider>
    </StoreProvider>
  </Router>,
);
