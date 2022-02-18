import SummaryForm from './pages/summary/SummaryForm'
import { Container } from 'react-bootstrap/Container';
import OrderEntry from './pages/entry/OrderEntry'
import { OrderDetailsProvider } from './contexts/OrderDetails'


function App() {
  return (
    <div className="App">
      <Container>
        <OrderDetailsProvider>
          {/* Summary page and entry page need provider */}
          <OrderEntry />

        </OrderDetailsProvider>

      </Container>
      {/* confirmation page dies not need provider */}
    </div>
  );
}

export default App;
