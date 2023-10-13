type Props = {
  color?: string;
};

const Importatnt = ({ color = "#6e6e6e" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g id="ico/favorite_n">
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0012 17.847L6.00122 21.9946L7.00122 14.1881L2.00122 8.99463H8.69122L12.0012 1.99463L15.3092 8.99463H22.0012L17.0012 14.1881L18.0012 21.9946L12.0012 17.847Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default Importatnt;
