import CustomButton from "./components/button/button";
import MainHeading, {
  Heading2 as SecondaryHeading,
} from "./components/headings/heading";
import UnorderedList from "./components/lists/unorderedList";
import ListParent from "./components/lists/listParent";
import ProfileComponent from "./components/profile/profileComponent";
const App = () => (
     
  <div>
    <h4>DAY-6</h4>
    <MainHeading />
    <SecondaryHeading />
    <UnorderedList />
    <ListParent />
    <ProfileComponent></ProfileComponent>
  </div>

);


export default App;
