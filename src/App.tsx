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
import Selects from "./pages/Selects";
import Textareas from "./pages/Textareas";
import Tabs from "./pages/Tabs";
import Dialogs from "./pages/Dialogs";
import Steppers from "./pages/Stepper";
import TimePickers from "./pages/TimePickers";
import Accordions from "./pages/Accordions";
function App() {
  return (
    <div className="lui-min-h-screen lui-divide-y-2 lui-divide-dashed lui-divide-ocean-primary-30 lui-font-bca">
      <Accordions />
      <Alerts />
      <Buttons />
      <Badges />
      <Calendars />
      <Cards />
      <Checkboxes />
      <Chips />
      <Dialogs />
      <Icons />
      <Inputs />
      <Paginations />
      <Selects />
      <Steppers />
      <Tables />
      <Tabs />
      <TimePickers />
      <Textareas />
      <Toasts />
      <Tooltips />
    </div>
  );
}

export default App;
