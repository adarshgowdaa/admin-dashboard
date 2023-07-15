import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import DataTable from "./DataTable";
import Pagination from "./Pagination";
function AdminDashboard() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [pageSize] = useState(50);

  // Fetch data
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URI) // TODO: Replace the API endpoint
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Search
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredData = data.filter((record) => {
      // const fullName = `${record.first_name} ${record.last_name}`.toLowerCase();
      const fullName = `${record.name}`.toLowerCase();
      return fullName.includes(searchTerm);
    });

    setFilteredData(filteredData);
    setCurrentPage(1);
  };

  // Paginate data
  const handlePagination = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <NavBar />
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <DataTable
        data={filteredData}
        currentPage={currentPage}
        pageSize={pageSize}
      />
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalRecords={filteredData.length}
        onPageChange={handlePagination}
      />
    </div>
  );
}

export default AdminDashboard;
