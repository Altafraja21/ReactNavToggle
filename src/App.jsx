import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from "./head/head";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Head />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;