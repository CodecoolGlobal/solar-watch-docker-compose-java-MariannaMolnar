/* eslint-disable react/prop-types */
function Logo({ h = 10, logoSrc }) {
    return (
        <img
            className={`mx-auto w-auto h-${h}`}
            src={logoSrc}
            alt="SolarWatch Logo"
        />
    );
}

export default Logo;