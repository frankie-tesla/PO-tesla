type Props = {
  isActive: boolean;
};

const LogoIcon = ({ isActive }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
      <g id="PO nor">
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.42403 20.6204L4.47103 8.84438L0.218028 7.74438C0.0330276 7.69138 -0.0499724 7.78938 0.0340276 7.96138L6.20003 20.5944C6.30318 20.7763 6.49131 20.8937 6.70003 20.9064C6.62368 20.9111 6.54909 20.8822 6.49597 20.8271C6.44285 20.7721 6.41655 20.6965 6.42403 20.6204Z"
          fill={isActive ? "#B0D3FF" : "#C2C2C2"}
        />
        <path
          id="Shape_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.69995 20.6206C6.55495 20.5886 7.68395 20.0426 7.69095 19.8746L7.65695 5.97462L3.58795 4.38662C3.42295 4.31762 3.31595 4.41362 3.35195 4.60162L6.32295 20.5676C6.35905 20.7557 6.51781 20.8955 6.70895 20.9076C6.68895 20.9046 6.72295 20.6256 6.69995 20.6206Z"
          fill={isActive ? "#86BCFF" : "#C2C2C2"}
        />
        <path
          id="Shape_3"
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.14496 20.6203C6.28961 20.8128 6.52303 20.9174 6.76296 20.8973L6.69996 20.8943C7.01549 20.9691 7.34366 20.9732 7.66096 20.9063V9.9523L4.14282 8.77783"
          fill={isActive ? "#61A7FF" : "#6E6E6E"}
        />
        <path
          id="Shape_4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.93406 2.04654C7.78506 1.95954 7.65506 2.04654 7.64706 2.23554L6.55806 20.5495C6.54502 20.7035 6.64191 20.8455 6.79006 20.8895C6.65906 20.8575 7.62006 20.0665 7.66006 19.9055L12.0171 3.98054L7.93406 2.04654Z"
          fill={isActive ? "#6DAEFF" : "#A4A4A4"}
        />
        <path
          id="Shape_5"
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.69158 20.5678C6.68288 20.7362 6.81114 20.8688 6.97606 20.9043C7.19837 20.9742 7.43675 20.9742 7.65906 20.9043L10.9271 6.96935L7.42361 5.90723"
          fill={isActive ? "#4B9BFF" : "#6E6E6E"}
        />
        <path
          id="Shape_6"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.7999 7.62639L12.3599 1.03239C12.2901 0.985255 12.2013 0.976134 12.1234 1.00808C12.0454 1.04002 11.9886 1.10881 11.9719 1.19139L6.63891 20.5734C6.61451 20.6409 6.62083 20.7157 6.6562 20.7782C6.69157 20.8407 6.75246 20.8846 6.82291 20.8984C6.84539 20.9023 6.86811 20.9046 6.89091 20.9054L18.8909 20.8904C19.0941 20.8804 19.2738 20.7554 19.3539 20.5684L23.9809 8.11939C24.0419 7.93297 23.967 7.72908 23.7999 7.62639Z"
          fill={isActive ? "#1D7FF9" : "#6E6E6E"}
        />
        <path
          id="Shape_7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.118 9.14257L13.097 4.74257C13.0736 4.73414 13.0475 4.73697 13.0265 4.75025C13.0054 4.76353 12.9916 4.78578 12.989 4.81057L12.789 5.54957C12.7713 5.60219 12.792 5.66009 12.839 5.68957L21.857 9.83658C21.8933 9.8414 21.9269 9.81665 21.933 9.78057L22.133 9.23957C22.1504 9.20755 22.1443 9.16785 22.118 9.14257ZM21.366 11.1296L12.355 7.43657C12.3317 7.42965 12.3066 7.43316 12.286 7.4462C12.2655 7.45924 12.2517 7.48053 12.248 7.50457L12.055 8.20457C12.0381 8.25426 12.0597 8.30891 12.106 8.33357L21.112 11.7976C21.1478 11.8004 21.1802 11.7766 21.188 11.7416L21.388 11.2216C21.4047 11.1897 21.3953 11.1504 21.366 11.1296ZM20.644 13.0396L11.644 9.99157C11.5972 9.98369 11.5527 10.0148 11.544 10.0616L11.36 10.7286C11.3463 10.7753 11.3683 10.8252 11.412 10.8466L20.4 13.6836C20.4349 13.685 20.4659 13.6615 20.474 13.6276L20.663 13.1276C20.6808 13.0978 20.6725 13.0594 20.644 13.0396ZM19.944 14.8766L10.973 12.4226C10.9263 12.4152 10.8821 12.4462 10.873 12.4926L10.697 13.1276C10.6817 13.1723 10.7054 13.221 10.75 13.2366L19.713 15.4966C19.7473 15.4974 19.7774 15.474 19.785 15.4406L19.968 14.9586C19.9764 14.9451 19.9791 14.9288 19.9753 14.9134C19.9715 14.8979 19.9617 14.8847 19.948 14.8766H19.944Z"
          fill={isActive ? "white" : "#FFF"}
        />
      </g>
    </svg>
  );
};

export default LogoIcon;