import Alerts from "./pages/Alerts";
import Badges from "./pages/Badges";
import Buttons from "./pages/Buttons";
import Cards from "./pages/Cards";
import Icons from "./pages/Icons";
import Toasts from "./pages/Toasts";
import Tooltips from "./pages/Tooltips";

function App() {
  return (
    <div className="min-h-screen divide-y-2 divide-dashed divide-ocean-primary-30 font-bca">
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
