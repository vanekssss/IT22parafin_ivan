import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

      <ProductCard
        title="Ноутбук Lenovo"
        price="25000"
        category="Техніка"
      />

      <ProductCard
        title="Навушники HyperX"
        price="3200"
        category="Аксесуари"
      />

      <ProductCard
        title="Мишка Logitech"
        price="1500"
        category="Периферія"
      />

      <Footer />
    </div>
  );
}

export default App;