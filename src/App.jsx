import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./routes/Layout/Layout";
import { Main } from "./routes/Main/Main";

function App() {
  return (
    <div>
      <Router basename="/">
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
