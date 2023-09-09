import { useState } from 'react'
import './App.css'
import List from './component/List'
import data from './backend/data'
import { MDBCol, MDBContainer, MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  const [people, setPeople] = useState(data)
  const ClearAll = () => {
    setPeople([])
  }
  return (
    <div>
      <h1>WorkShop 1: Birthday List </h1>
      <main>
        <MDBContainer>
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px', width: '600px' }}>
              <MDBCardBody className="p-4">
                <script type="module" src="/src/main.tsx"></script>
                <List people={people} />
                <br />
                <div className="d-flex pt-1">
                  <MDBBtn onClick={ClearAll} className="flex-grow-1">CLEAR</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
      </main>
    </div>

  )
}

export default App
