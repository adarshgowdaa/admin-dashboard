import React from "react";
import { Card, Typography } from "@material-tailwind/react";

function DataTable({ data, currentPage, pageSize }) {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const currentPageData = data.slice(start, end);
  return (
    <div>
      <Card className=" h-full w-full mb-5">
        <table className="w-full table-fixed text-left ml-5 mr-5">
          <thead>
            <tr>
              <th className="border-b-2 p-4">
                <Typography className="font-bold leading-none opacity-70">
                  Id
                </Typography>
              </th>

              <th className="border-b-2 p-4">
                <Typography className="font-bold leading-none opacity-70">
                  Name
                </Typography>
              </th>

              <th className="border-b-2 p-4">
                <Typography className="font-bold leading-none opacity-70">
                  Email
                </Typography>
              </th>

              <th className="border-b-2 p-4">
                <Typography className="font-bold leading-none opacity-70">
                  Body
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((record, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="p-4">
                  <Typography variant="small" className="font-normal">
                    {record.id}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" className="font-normal">
                    {record.name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" className="font-normal">
                    {record.email}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" className="font-normal">
                    {record.body}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default DataTable;
