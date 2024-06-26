import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Request from './pages/Request/Request';
import OnHold from './pages/OnHold/OnHold';
import NewFeature from './pages/NewFeature/NewFeature';
import Home from './pages/Home/Home';

export default function Root() {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/request">Request</Link>
          </li>
          <li>
            <Link to="/on_hold">On Hold</Link>
          </li>
          <li>
            <Link to="/new_feature">New Feature</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/on_hold" element={<OnHold />} />
        <Route path="/new_feature" element={<NewFeature />} />
      </Routes>
    </Router>
  );
}
