export default function Spinner() {
  return (
    <div className="relative box-border inline-block size-20 bg-white">
      <div className="animate-spinn-45 border-t-grey-300 absolute m-2 box-border block size-16 rounded-full border-8 border-solid border-r-transparent border-b-transparent border-l-transparent" />

      <div className="animate-spinn-30 border-t-grey-300 absolute m-2 box-border block size-16 rounded-full border-8 border-solid border-r-transparent border-b-transparent border-l-transparent" />

      <div className="animate-spinn-15 border-t-grey-300 absolute m-2 box-border block size-16 rounded-full border-8 border-solid border-r-transparent border-b-transparent border-l-transparent" />

      <div className="animate-spinn border-t-grey-300 absolute m-2 box-border block size-16 rounded-full border-8 border-solid border-r-transparent border-b-transparent border-l-transparent" />
    </div>
  );
}
