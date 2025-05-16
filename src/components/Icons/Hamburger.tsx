import { useMenuContext } from "../../context/MobileMenuConext";

export default function Hamburger() {
  const { setMenuOpened } = useMenuContext();

  return (
    <button
      className="hidden cursor-pointer flex-col justify-center gap-y-1.75 max-lg:flex max-sm:gap-y-1.5"
      onClick={() => setMenuOpened(true)}
    >
      <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-black max-sm:h-[0.125rem] max-sm:w-6" />
      <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-black max-sm:h-[0.125rem] max-sm:w-6" />
      <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-black max-sm:h-[0.125rem] max-sm:w-6" />
    </button>
  );
}
