import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LazyLoad from '../src';
import './index.css';

const lazyLoadRender = (isVisible: boolean): JSX.Element => {
  return <>{isVisible ? 'Visible!!' : 'InVisible!!'}</>;
};

const rootId = 'scrollList';

const App = () => {
  return (
    <StrictMode>
      <section>
        <h1>Demo</h1>
        <ul id={rootId}>
          {[...Array(10)].map((_, index) => (
            <LazyLoad
              key={index}
              render={lazyLoadRender}
              rootId={rootId}
              as='li'
              className='row'
            />
          ))}
        </ul>
      </section>
    </StrictMode>
  );
};

// @ts-ignore
const root = createRoot(document.getElementById('root'));

root.render(<App />);
