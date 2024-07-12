import Heading1, { Heading2 } from "../headings/heading";
import CustomImage from "../image/customeimage";
const ProfileComponent = () => {
//--------DAY-8---------
  const profileDetails={
    name:"kumar",
    mobile:9686568768,
    salary:50000,
  };
  const { name, mobile, salary } = profileDetails;
  return (
// ---------------------day-7---------------------------------------------
//     <div>
//       <CustomImage></CustomImage>
//       <Heading1 />
//       <Heading2 />
//     </div>
//--------------------DAY-8---------------------------------
 <div>
  <h2>My name is {name}</h2>
  <h2>My salary is {salary}</h2>
  <h2>My mobile is {mobile}</h2>
  <Heading1/>
  <Heading2/>
 </div>
);
};
export default ProfileComponent;
