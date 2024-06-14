import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CarrierLogin from "./pages/CarrierLogin";
import InfrastructureChargingDepo from "./pages/InfrastructureChargingDepo";
import Frame from "./pages/Frame";
import LandingPage from "./pages/LandingPage";

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
      case "/infrastructure-charging-depots-login":
        title = "";
        metaDescription = "";
        break;
      case "/404":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CarrierLogin />} />
      <Route
        path="/infrastructure-charging-depots-login"
        element={<InfrastructureChargingDepo />}
      />
      <Route path="/404" element={<Frame />} />
      <Route path="/landing-page" element={<LandingPage />} />
    </Routes>
  );
}
export default App;
