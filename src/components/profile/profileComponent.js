import Heading1, { Heading2 } from "../headings/heading";
import CustomImage from "../image/customeimage";
const ProfileComponent = () => {
  const profileDetails={
    name:"kumar",
    mobile:9686568768,
    salary:50000,
  };
  const { name, mobile, salary } = profileDetails;
  return (

 <div>
  <h2>My name is {name}</h2>
  <h2>My salary is {salary}</h2>
  <h2>My mobile is {mobile}</h2>
  {console.log("hii")}
  <Heading1/>
  <Heading2/>
 </div>
);
};
export default ProfileComponent;
