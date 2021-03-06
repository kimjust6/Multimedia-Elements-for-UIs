import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.scss";

import About from "./components/AboutMe";
import Policy from "./components/Policy";
import AssignmentsNav from "./components/assignments/AssignmentsNav";
import Assignments from "./components/assignments/Assignments";
import Assignment1 from "./components/assignments/Assignment1";
import Assignment2 from "./components/assignments/Assignment2";
import Assignment3 from "./components/assignments/Assignment3";
import Labs from "./components/labs/Labs";
import Lab1 from "./components/labs/Lab1";
import Lab2 from "./components/labs/Lab2";
import Lab3 from "./components/labs/Lab3";
import Lab4 from "./components/labs/Lab4";
import Lab5 from "./components/labs/Lab5";
import PageNotFound from "./components/PageNotFound";
import LabsNav from "./components/labs/LabsNav";
import Navigation from "./components/Navbar";
import Design from "./components/design/Design";


function App() {
  return (
    <div>
      <Router>
        <nav style={{ margin: 10 }}>
          {/* <Navbar2 /> */}
          <Navigation></Navigation>
        </nav>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/~bth645_221a18/" element={<About />} />
          <Route path="~bth645_221a18/">
            <Route path="about" element={<About />} />
            <Route path="design" element={<Design />} />
            <Route path="assignments" element={<AssignmentsNav />}>
              <Route path="" element={<Assignments />} />
              <Route path="1" element={<Assignment1 />} />
              <Route path="2" element={<Assignment2 />} />
              <Route path="3" element={<Assignment3 />} />
            </Route>

            <Route path="labs" element={<LabsNav />}>
              <Route path="" element={<Labs />} />
              <Route path="1" element={<Lab1 />} />
              <Route path="2" element={<Lab2 />} />
              <Route path="3" element={<Lab3 />} />
              <Route path="4" element={<Lab4 />} />
              <Route path="5" element={<Lab5 />} />
            </Route>

            <Route path="policy" element={<Policy />} />
          </Route>
          <Route path="404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />

          {/* <Navigate from="/100" to="/404" />  */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
