import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./routes/Layout/Layout";
import { Main } from "./routes/Main/Main";
import { Contacts } from "./routes/Contacts/Contacts";

function App() {
  return (
    <div>
      <Router basename="/">
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact-us" element={<Contacts />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
