import Alerts from "./pages/Alerts";
import Badges from "./pages/Badges";
import Buttons from "./pages/Buttons";
import Cards from "./pages/Cards";
import Icons from "./pages/Icons";
import Toasts from "./pages/Toasts";
import Tooltips from "./pages/Tooltips";

function App() {
  return (
    <div className="lui-min-h-screen lui-divide-y-2 lui-divide-dashed lui-divide-ocean-primary-30 lui-font-bca">
      <Alerts />
      <Buttons />
      <Badges />
      <Cards />
      <Icons />
      <Toasts />
      <Tooltips />
    </div>
  );
}

export default App;
