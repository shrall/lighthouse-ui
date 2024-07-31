import Buttons from "./pages/Buttons";
import Badges from "./pages/Badges";
import Toasts from "./pages/Toasts";
import Alerts from "./pages/Alerts";
import Icons from "./pages/Icons";

function App() {
  return (
    <div className="min-h-screen divide-y-2 divide-dashed divide-ocean-primary-30 font-bca">
      <Alerts />
      <Buttons />
      <Badges />
      <Icons />
      <Toasts />
    </div>
  );
}

export default App;
