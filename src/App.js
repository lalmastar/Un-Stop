import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import NewAssessment from "./pages/NewAssessment/NewAssessment";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import MobileView from "./pages/MobileView/MobileView";
import AssessmentsOverview from "./components/AssessmentsOverview";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-assessment" element={<NewAssessment />} />
      <Route path="/mobile-view" element={<MobileView />} />
      <Route path="/overview" element={<AssessmentsOverview />} />
    </Routes>
  );
}
export default App;
