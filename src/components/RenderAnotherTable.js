import Table from "./Table";
import tableData2 from "../tableData2.json";

const columns = [
  { label: "Name", accessor: "name", sortable: true },
  { label: "Country", accessor: "country", sortable: true },
  { label: "GitHub username", accessor: "github_username", sortable: true },
  { label: "Course price", accessor: "money", sortable: true },
];

const RenderAnotherTable = () => {
  return (
    <>
      <Table
        caption="List of developers with an affordable course (has no default sorting)."
        data={tableData2}
        columns={columns}
      />
    </>
  );
};

export default RenderAnotherTable;
