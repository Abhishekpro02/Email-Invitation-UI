import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InviteAcceptance from "./InviteAcceptance.jsx";
import SendInvite from "./SendInvite.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route to handle the invite page with query params */}
        <Route path="/invite" element={<InviteAcceptance />} />
        <Route path="/" element={<SendInvite />} />
      </Routes>
    </Router>
  );
}

export default App;
