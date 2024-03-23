import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Toolbar,
  Edit,
  Page,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { MachinesData } from "../../data";

const Machine = () => {
  const [data, setData] = useState(MachinesData);

  useEffect(() => {
    // Fetch initial data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("your-backend-endpoint");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleActionComplete = async (args) => {
    if (args.requestType === "save") {
      try {
        console.log(args.data)
        await axios.post("your-backend-endpoint", args.data);
        // If needed, you can fetch updated data from the backend after insertion
        // fetchData();
      } catch (error) {
        console.error("Error inserting data:", error);
      }
    } else if (args.requestType === "delete") {
      try {
        console.log(args.data[0].id)
        await axios.delete(`your-backend-endpoint/${args.data[0].id}`);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  const MachinesGrid = [
    {
      field: "id",
      headerText: "ID",
      width: "120",
      textAlign: "Center",
    },
    {
      field: "name",
      headerText: "Name",
      width: "150",
      textAlign: "Center",
    },
    
  ];

  const editing = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    
    
    mode: "Dialog",
  };

  return (
    <div className="dark:text-gray-200 dark:bg-secondary-dark-bg m-2  pt-2  md:m-10 mt-24  md:p-10 bg-white rounded-3xl">
      <GridComponent
        dataSource={data}
        width="auto"
        allowPaging
        allowSorting
        allowFiltering
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={["Add", "Edit", "Delete", "Update", "Cancel"]}
        actionComplete={handleActionComplete}
      >
        <ColumnsDirective>
          {MachinesGrid.map((item, index) => (
            <ColumnDirective
              key={index}
              field={item.field}
              width={item.width}
              textAlign={item.textAlign}
              headerText={item.headerText}
            />
          ))}
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit, Page,Filter]} />
      </GridComponent>
    </div>
  );
};

export default Machine;
