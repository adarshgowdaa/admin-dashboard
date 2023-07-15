import React from "react";

function NavBar() {
  // Download
  const handleDownload = () => {
    fetch("https://jsonplaceholder.typicode.com/comments") // TODO: Replace with the API endpoint
      .then((response) => response.json())
      .then((data) => {
        let formattedData;
        formattedData = convertToExcel(data);

        const link = document.createElement("a");
        link.href = URL.createObjectURL(
          new Blob([formattedData], { type: "text/csv" })
        );
        link.download = "data.csv";
        link.click();
      });
  };

  // Convert JSON to CSV
  const convertToExcel = (data) => {
    const array = [Object.keys(data[0])].concat(data);
    return array
      .map((i) => {
        return Object.values(i).toString();
      })
      .join("\n");
  };
  return (
    <div>
      <nav className="relative flex w-full flex-wrap items-center justify-between py-1 bg-red-600 lg:py-3">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ml-2">
            <a
              className="text-xl font-semibold text-neutral-100 font-mono"
              href="/"
            >
              Admin Dashboard
            </a>
          </div>
          <button
            type="button"
            className="focus:outline-none text-red-600 bg-neutral-100 hover:bg-neutral-200 font-medium rounded-lg text-sm px-5 py-2.5 "
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
