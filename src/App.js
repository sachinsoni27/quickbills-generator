import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";

const App = () => {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      {/* App Header */}
      <header className="app-header w-100">
        <Container>
          <div className="d-flex align-items-center justify-content-between py-3">
            <div className="d-flex align-items-center gap-2">
              <span className="app-title fw-bold fs-4">QuickBills</span>
            </div>
            <div className="app-owner-badge">
              <span className="text-muted small">by </span>
              <a
                href="https://github.com/sachinsoni27"
                target="_blank"
                rel="noreferrer"
                className="owner-link fw-semibold"
              >
                Sachin Soni
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <Container className="flex-grow-1">
        <InvoiceForm />
      </Container>

      {/* App Footer */}
      <footer className="app-footer w-100 mt-4">
        <Container>
          <div className="d-flex align-items-center justify-content-center py-3">
            <div className="text-center text-muted small">
              © {new Date().getFullYear()} Made with ❤️ by{" "}
              <a
                href="https://github.com/sachinsoni27"
                target="_blank"
                rel="noreferrer"
                className="owner-link fw-semibold"
              >
                Sachin Soni
              </a>
              {" · "}
              <a
                href="mailto:sachinsoniofficial2003@gmail.com"
                className="owner-link"
              >
                sachinsoniofficial2003@gmail.com
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default App;
