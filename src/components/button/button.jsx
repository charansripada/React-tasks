const CustomButton =(prop) => {
 //------DAY-8-------  
  // console.log(prop)
  // const {width,bgColor,text="button"}=prop
  const {text,bgColor,width=100}=prop.properties
    return<button style={{
      backgroundColor:bgColor,
      width:width
    }}>{text}</button>;
};

export default CustomButton;
