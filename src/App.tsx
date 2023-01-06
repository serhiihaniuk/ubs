import AppRouter from '@components/AppRouter';
import Header from '@components/Header/Header';

const App = () => {
  return (
    <div className="page">
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
