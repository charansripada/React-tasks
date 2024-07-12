const CustomImage = (prop) => {
  const{ source, altText, width, height } = prop;
  return (
    // --------------------day-7----------------------------------------------
    //       <img
    //         src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    //         alt="bag"
    //         width={100}
    //         height={100}
    //       />


    //------------------DAY-8----------------------------------
    
    <img
      class="image"
      src={source}
      alt={altText}
      width={width}
      height={height}
    />
  );
};

export default CustomImage;
