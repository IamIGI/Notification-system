import { Route, Routes } from 'react-router-dom';
import Request from './pages/Request/Request';
import OnHold from './pages/OnHold/OnHold';
import NewFeature from './pages/NewFeature/NewFeature';
import Home from './pages/Home/Home';
import { NotificationType } from './models/notification.model';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export default function Root() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path={`/${NotificationType.Request}/:id`} element={<Request />} />
      <Route path={`/${NotificationType.OnHold}/:id`} element={<OnHold />} />
      <Route
        path={`/${NotificationType.NewFeature}/:id`}
        element={<NewFeature />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
