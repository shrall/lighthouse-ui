import Alerts from "./pages/Alerts";
import Badges from "./pages/Badges";
import Buttons from "./pages/Buttons";
import Cards from "./pages/Cards";
import Icons from "./pages/Icons";
import Calendars from "./pages/Calendars";
import Tables from "./pages/tables/page";
import Toasts from "./pages/Toasts";
import Tooltips from "./pages/Tooltips";
import Inputs from "./pages/Inputs";
import Paginations from "./pages/Paginations";
import Checkboxes from "./pages/Checkboxes";
import Chips from "./pages/Chips";

function App() {
  return (
    <div className="lui-min-h-screen lui-divide-y-2 lui-divide-dashed lui-divide-ocean-primary-30 lui-font-bca">
      <Alerts />
      <Buttons />
      <Badges />
      <Calendars />
      <Cards />
      <Checkboxes />
      <Chips />
      <Icons />
      <Inputs />
      <Paginations />
      <Tables />
      <Toasts />
      <Tooltips />
    </div>
  );
}

export default App;
