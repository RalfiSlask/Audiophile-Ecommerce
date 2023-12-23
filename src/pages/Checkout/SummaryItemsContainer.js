import { useContext } from 'react';
import Context from '../../context/Context';
import SummaryProduct from './SummaryProduct';

const SummaryItemsContainer = () => {
  const { cartList } = useContext(Context);

  return (
    <div className="flex flex-col gap-[24px] my-[8px] w-full">
      {cartList.map((product, index) => {
        return <SummaryProduct key={index} product={product} />;
      })}
    </div>
  );
};

export default SummaryItemsContainer;
