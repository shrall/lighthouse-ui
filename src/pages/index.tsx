import Alerts from "./Alerts";
import Badges from "./Badges";
import Buttons from "./Buttons";
import Cards from "./Cards";
import Icons from "./Icons";
import Calendars from "./Calendars";
import Tables from "./tables/page";
import Toasts from "./Toasts";
import Tooltips from "./Tooltips";
import Inputs from "./Inputs";
import Paginations from "./Paginations";
import Checkboxes from "./Checkboxes";
import Chips from "./Chips";
import Selects from "./Selects";
import Textareas from "./Textareas";
import Tabs from "./Tabs";
import Dialogs from "./Dialogs";
import Steppers from "./Stepper";
import TimePickers from "./TimePickers";
import Accordions from "./Accordions";
import Switches from "./Switches";
import RadioButtons from "./RadioButtons";
import Drawers from "./Drawers";
import Spinners from "./Spinners";

interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = () => {
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
      <Drawers />
      <Icons />
      <Inputs />
      <Paginations />
      <RadioButtons />
      <Selects />
      <Spinners />
      <Steppers />
      <Switches />
      <Tables />
      <Tabs />
      <TimePickers />
      <Textareas />
      <Toasts />
      <Tooltips />
    </div>
  );
};

export default IndexPage;
