import { forms } from "@/data/buyForm";

function BuyForm() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 items-center justify-center 2xl:gap-[20px] gap-[10px] w-full">
      {forms.map((form) => {
        return (
          <div key={form.id}>
            <label className="2xl:text-lg text-sm font-semibold">
              {form.label}
            </label>
            <div
              className="flex flex-row items-center justify-between bg-white 2xl:text-base text-xs text-[#333333]
             rounded-[8px] mt-[8px] min-w-full 2xl:px-[10px] px-[12px] 2xl:py-[14px] py-[7px]"
            >
              <div>
                <input className="focus:outline-none" type="text" placeholder={form.placeholder} />
              </div>
              <div className="text-[#33333378] 2xl:text-xl text-base">{form.icon}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BuyForm;
