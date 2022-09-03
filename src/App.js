import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Layout from './components/Layout';
import ProductList from './components/ProductList';
import { VerticalSpace } from './components/Space';

function App() {
  return (
    <div className="App">
      <Hero />
      <Layout>
        <Header />
        <VerticalSpace height={16} />
        <ProductList />
      </Layout>
    </div>
  );
}

export default App;
