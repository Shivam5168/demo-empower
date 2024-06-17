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
import FacilityOperations from "./pages/FacilityOperations";
import FacilityOperations1 from "./pages/FacilityOperations1";
import FacilityOperations2 from "./pages/FacilityOperations2";
import FacilityOperations3 from "./pages/FacilityOperations3";
import FacilityOperations4 from "./pages/FacilityOperations4";
import FacilityOperations5 from "./pages/FacilityOperations5";
import FacilityOperations6 from "./pages/FacilityOperations6";
import FacilityOperations7 from "./pages/FacilityOperations7";
import FacilityOperations8 from "./pages/FacilityOperations8";
import FacilityOperations9 from "./pages/FacilityOperations9";

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
      case "/facility-operations-1":
        title = "";
        metaDescription = "";
        break;
      case "/facility-operations-3":
        title = "";
        metaDescription = "";
        break;
      case "/facility-operations-4":
        title = "";
        metaDescription = "";
        break;
      case "/facility-operations-41":
        title = "";
        metaDescription = "";
        break;
      case "/facility-operations-2":
        title = "";
        metaDescription = "";
        break;
      case "/facility-operations-42":
        title = "";
        metaDescription = "";
        break;
      case "/facility-operations-43":
        title = "";
        metaDescription = "";
        break;
      case "/facility-operations-5":
        title = "";
        metaDescription = "";
        break;
      case "/facility-operations-6":
        title = "";
        metaDescription = "";
        break;
      case "/facility-operations-7":
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
      <Route path="/facility-operations-1" element={<FacilityOperations />} />
      <Route path="/facility-operations-3" element={<FacilityOperations1 />} />
      <Route path="/facility-operations-4" element={<FacilityOperations2 />} />
      <Route path="/facility-operations-41" element={<FacilityOperations3 />} />
      <Route path="/facility-operations-2" element={<FacilityOperations4 />} />
      <Route path="/facility-operations-42" element={<FacilityOperations5 />} />
      <Route path="/facility-operations-43" element={<FacilityOperations6 />} />
      <Route path="/facility-operations-5" element={<FacilityOperations7 />} />
      <Route path="/facility-operations-6" element={<FacilityOperations8 />} />
      <Route path="/facility-operations-7" element={<FacilityOperations9 />} />
    </Routes>
  );
}
export default App;