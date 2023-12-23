import { useContext, useEffect } from 'react';
import MediumButton from '../../components/shared/ui/MediumButton';
import GrandTotal from './GrandTotal';
import SummaryItemsContainer from './SummaryItemsContainer';
import Context from '../../context/Context';

const Summary = () => {
  const { setButtonPressed } = useContext(Context);

  const handleClick = () => {
    setButtonPressed(true);
  };

  return (
    <div className="flex flex-col items-start w-full xl:w-[350px] p-[24px] md:px-[28px] md:py-[32px] xl:px-[48px] xl:py-[54px] bg-white rounded-lg mt-[32px] md:mt-0 gap-[32px]">
      <h2 className="uppercase text-[18px] font-bold tracking-[1.286px]">Summary</h2>
      <SummaryItemsContainer />
      <GrandTotal />
      <MediumButton text={'continue & pay'} large={true} onClick={handleClick} />
    </div>
  );
};

export default Summary;
