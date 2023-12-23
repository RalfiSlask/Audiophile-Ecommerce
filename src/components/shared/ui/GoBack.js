const GoBack = () => {
  const handleClick = () => {
    history.back();
  };

  return (
    <p
      onClick={handleClick}
      className="text-[15px] font-medium leading-[25px] opacity-50 mt-[110px] xl:mt-[120px] text-start w-[327px] md:w-[689px] xl:w-[1110px] cursor-pointer hover:text-[#D87D4A] hover:opacity-100"
    >
      Go Back
    </p>
  );
};

export default GoBack;
