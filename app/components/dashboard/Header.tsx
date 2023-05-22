import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="flex justify-between text-blue-700 px-4 pt-4">
      <h2>Dashboard</h2>
      <h2>Welcome Back, Chukwu</h2>
    </div>
  );
};

export default Header;
