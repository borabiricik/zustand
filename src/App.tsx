import Counter from "@components/counter";
import Countries from "@components/countries";

function App() {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center flex-col space-y-10 mx-4">
      <Counter />
      <Countries />
    </div>
  );
}

export default App;
