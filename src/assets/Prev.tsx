type Props = {
  color: string;
};

const Prev = ({ color = "#D8D8D8" }: Props) => {
  return (
    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="Combined Shape"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.71553 0.348313C5.09912 -0.0422112 5.72105 -0.042211 6.10464 0.348313C6.48823 0.738837 6.48823 1.372 6.10464 1.76253L2.92467 4.99996L6.10464 8.2374C6.48823 8.62792 6.48823 9.26109 6.10464 9.65161C5.72105 10.0421 5.09912 10.0421 4.71553 9.65161L0.895481 5.76253C0.689826 5.55315 0.594429 5.27404 0.60929 4.99996C0.59443 4.72589 0.689827 4.44677 0.895482 4.2374L4.71553 0.348313Z"
        fill={color}
      />
    </svg>
  );
};

export default Prev;
