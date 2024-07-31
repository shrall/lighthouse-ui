import Buttons from "./pages/Buttons";
import Badges from "./pages/Badges";
import Toasts from "./pages/Toasts";
import Alerts from "./pages/Alerts";

function App() {
  return (
    <div className="min-h-screen divide-y-2 divide-dashed divide-ocean-primary-30 font-bca">
      <Alerts />
      <Buttons />
      <Badges />
      <Toasts />
    </div>
  );
}

export default App;
