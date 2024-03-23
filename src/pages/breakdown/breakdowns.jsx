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
  Group
} from "@syncfusion/ej2-react-grids";
import { breakdownData } from "../../data";

const BreakDown = () => {
  const [data, setData] = useState(breakdownData);

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
   

  const breakdownGrid = [
    {
      field: "date",
      headerText: "Date",
      width: "120",
      textAlign: "Center",
    },
    {
      field: "lengthUsed",
      headerText: "Length Used",
      width: "150",
      textAlign: "Center",
    },
    {
      field: "expectedLengthRemaining",
      headerText: "Expected length remaining",
      width: "150",
      textAlign: "Center",
    },{
      field: "replacedBy",
      headerText: "Replaced By",
      width: "150",
      textAlign: "Center",
    },{
      field: "reason",
      headerText: "reason",
      width: "150",
      textAlign: "Center",
    },{
      field: "changeTime",
      headerText: "Change Time",
      width: "150",
      textAlign: "Center",
    },{
      field: "hoursIntoShift",
      headerText: "Hours into shift",
      width: "150",
      textAlign: "Center",
    },
    {
      field: "machineId",
      headerText: "Machine ID",
      width: "150",
      textAlign: "Center",
    },
    {
      field: "toolCode",
      headerText: "Tool Code",
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
        allowGrouping
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={["Add", "Edit", "Delete", "Update", "Cancel"]}
        actionComplete={handleActionComplete}
      >
        <ColumnsDirective>
          {breakdownGrid.map((item, index) => (
            <ColumnDirective
              key={index}
              field={item.field}
              width={item.width}
              textAlign={item.textAlign}
              headerText={item.headerText}
            />
          ))}
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit, Page,Group,Filter]} />
      </GridComponent>
    </div>
  );
};

export default BreakDown;
