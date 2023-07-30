import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Stockholm", "Oslo", "Copenhagen"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;
