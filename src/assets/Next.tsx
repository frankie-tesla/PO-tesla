type Props = {
  color: string;
};

const Next = ({ color = "#D8D8D8" }: Props) => {
  return (
    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="Combined Shape"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.28447 0.348313C1.90088 -0.0422112 1.27895 -0.042211 0.89536 0.348313C0.511768 0.738837 0.511768 1.372 0.89536 1.76253L4.07533 4.99996L0.895359 8.2374C0.511768 8.62792 0.511768 9.26109 0.89536 9.65161C1.27895 10.0421 1.90088 10.0421 2.28447 9.65161L6.10452 5.76253C6.31017 5.55315 6.40557 5.27404 6.39071 4.99996C6.40557 4.72589 6.31017 4.44677 6.10452 4.2374L2.28447 0.348313Z"
        fill={color}
      />
    </svg>
  );
};

export default Next;
