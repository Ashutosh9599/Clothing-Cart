import ClothingHeader from "./component/ClothingHeader/ClothingHeader";
import ProductForm from "./component/ProductForm/ProductForm";
import ProductList from "./component/ProductList/ProductList";

const products = [
  {
    name: 'T-Shirt 1',
    description: 'Description for T-Shirt 1',
    price: 20,
    quantity: { L: 10, M: 15, S: 20 },
  },
  {
    name: 'T-Shirt 2',
    description: 'Description for T-Shirt 2',
    price: 25,
    quantity: { L: 8, M: 12, S: 18 },
  },
  // Add more products as needed
];
function App() {
  return (
    <div className="App">
      <ClothingHeader />
      <ProductForm /> {/* Render the ProductForm component */}
      <ProductList products={products} />
    </div>
  );
}

export default App;