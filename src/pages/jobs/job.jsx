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
import { JobsData } from "../../data";

const Job = () => {
  const [data, setData] = useState(JobsData);

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


  const jobGrid = [
    {
      field: "Job_id",
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
    {
      field: "length",
      headerText: "Length",
      width: "150",
      textAlign: "Center",
    },
    {
      field: "holesCount",
      headerText: "Holes count",
      width: "150",
      textAlign: "Center",
    },
    {
        field: "toolCode",
        headerText:"Tool code",
        width:"150",
        textAlign:"Center"
    }
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
          {jobGrid.map((item, index) => (
            <ColumnDirective
              key={index}
              field={item.field}
              width={item.width}
              textAlign={item.textAlign}
              headerText={item.headerText}
            />
          ))}
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit, Page,Filter,Group]} />
      </GridComponent>
    </div>
  );
};

export default Job;
