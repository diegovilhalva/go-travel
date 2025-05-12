export default function Close() {
  return (
    <div className="w-full">
      <button className="relative ml-auto flex size-6 cursor-pointer items-center">
        <div className="absolute h-0.5 w-6 rotate-45 bg-black" />
        <div className="absolute h-0.5 w-6 -rotate-45 bg-black" />
      </button>
    </div>
  );
}
