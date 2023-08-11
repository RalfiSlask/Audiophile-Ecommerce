import cashLogo from "../../../assets/checkout/icon-cash-on-delivery.svg";

const CashOnDelivery = () => {
  return (
    <div className="flex items-center justify-between w-full gap-[32px]">
        <img src={cashLogo} alt="cash delivery" className="w-[40px] h-[40px]"/>
        <p className="font-medium opacity-50 text-[15px] leading-[25px]">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
    </div>
  )
}

export default CashOnDelivery