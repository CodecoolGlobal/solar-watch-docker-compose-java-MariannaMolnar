/* eslint-disable react/prop-types */
const BiggerOnHover = ({ children }) => (
  <div className="transition-transform transform hover:scale-110">
    {children}
  </div>
);

export default BiggerOnHover;
