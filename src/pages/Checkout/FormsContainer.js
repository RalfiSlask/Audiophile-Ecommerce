import { useContext } from 'react';
import InputsContainer from './InputsContainer';
import Context from '../../context/Context';

const FormsContainer = () => {
  const { inputList } = useContext(Context);

  return (
    <div className="flex flex-col items-start w-full xl:w-[730px] p-[24px] md:px-[28px] md:py-[32px] xl:px-[48px] xl:py-[54px] bg-white rounded-lg">
      <h1 className="uppercase text-[28px] md:text-[32px] font-bold tracking-[1px] md:tracking-[1.143px] leading-normal md:leading-[36px]">
        Checkout
      </h1>
      {inputList.map(object => {
        return <InputsContainer key={object.id} contents={object} />;
      })}
    </div>
  );
};

export default FormsContainer;
