export default function ErrorIcon(props: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        d="M7 1.4a5.6 5.6 0 1 0 0 11.2A5.6 5.6 0 0 0 7 1.4ZM0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm7-3.5a.7.7 0 0 1 .7.7V7a.7.7 0 1 1-1.4 0V4.2a.7.7 0 0 1 .7-.7Z"
        clipRule="evenodd"
      />
      <path d="M7.7 9.8a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0Z" />
    </svg>
  );
}
