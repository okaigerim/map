import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./routes/Layout/Layout";
import { Main } from "./routes/Main/Main";
import { Contacts } from "./routes/Contacts/Contacts";
import { Admission } from "./routes/Admission/Admission";

function App() {
  return (
    <div>
      <Router basename="/">
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact-us" element={<Contacts />} />
            <Route path="/admissions" element={<Admission />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
