import { useContext, useEffect } from 'react';
import PaymentInput from './PaymentInput';
import Context from '../../context/Context';
import CashOnDelivery from './ui/CashOnDelivery';

const PaymentMethod = ({ contents }) => {
  const { isCashActive, setIsCashActive, validList, setValidList } = useContext(Context);
  const { isCash } = contents;

  useEffect(() => {
    setIsCashActive(isCash);
  }, [isCash]);

  const handleClickEMoney = () => {
    setIsCashActive(false);
  };

  const handleClickCash = () => {
    setIsCashActive(true);
    if (validList.length === 9) {
      const reducedList = validList.filter((input, index) => index < 7);
      setValidList(reducedList);
    }
  };

  return (
    <div>
      <div className="flex justify-between h-[128px] mb-[30px]">
        <p className="text-[12px] font-bold leading-normal tracking-[-0.214px]">Payment Method</p>
        <div className="flex flex-col w-[280px] md:w-[309px] h-full justify-between">
          <PaymentInput value={'e-Money'} isCash={isCashActive} onClick={handleClickEMoney} />
          <PaymentInput value={'Cash on Delivery'} isCash={isCashActive} onClick={handleClickCash} />
        </div>
      </div>
      {isCashActive && <CashOnDelivery />}
    </div>
  );
};

export default PaymentMethod;
