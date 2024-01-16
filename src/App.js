import { Col, Container, Row } from "reactstrap";
import "./App.css";
import {
  Header,
  Footer,
  HeroSection,
  Category,
  Books,
  MostListen,
  DownloadApp,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Container>
          <Row>
            <Col className="mb-3">
              <HeroSection />
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <Category />
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <Books />
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <MostListen />
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <DownloadApp />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
