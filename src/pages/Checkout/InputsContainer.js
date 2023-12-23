import Input from './Input';
import PaymentMethod from './PaymentMethod';

const InputsContainer = ({ contents }) => {
  const { title, inputs } = contents;

  return (
    <div className="w-full flex flex-col gap-[16px] mt-[32px] md:mt-[50px]">
      <h2 className="text-[13px] font-bold uppercase leading-[25px] tracking-[0.929px] text-[#D87D4A]">{title}</h2>
      {title === 'Payment Details' ? <PaymentMethod contents={contents} /> : null}
      <div className="flex flex-wrap gap-y-[24px] gap-x-3">
        {inputs.map(input => {
          return <Input key={input.id} content={input} />;
        })}
      </div>
    </div>
  );
};

export default InputsContainer;
