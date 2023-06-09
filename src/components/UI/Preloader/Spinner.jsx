/* eslint-disable react/react-in-jsx-scope */
const Spinner = ({...props}) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      // eslint-disable-next-line max-len
      d="M24 2.4c0-1.325 1.077-2.412 2.396-2.28A24 24 0 1 1 .12 26.396C-.012 25.077 1.075 24 2.4 24c1.325 0 2.385 1.079 2.55 2.394A19.2 19.2 0 1 0 26.394 4.95C25.079 4.785 24 3.725 24 2.4Z"
      fill='#00BDD3'
    />
  </svg>
);

export default Spinner;
