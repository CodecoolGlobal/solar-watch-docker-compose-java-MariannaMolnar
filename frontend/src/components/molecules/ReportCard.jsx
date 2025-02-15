/* eslint-disable react/prop-types */
function ReportCard({ date, sunrise, sunset }) {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {date}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {" "}
        Sunrise: {sunrise}{" "}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {" "}
        Sunset: {sunset}{" "}
      </p>
    </div>
  );
}

export default ReportCard;
