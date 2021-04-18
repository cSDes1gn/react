import React, { useState } from "react";
// import { Counter } from "./Counter";
import { SuppliersForm } from "./SuppliersForm";
import { SuppliersTable } from "./SuppliersTable";
import { generate } from "shortid";

const App: React.FC = () => {
  // return <div>
  //     <Counter>
  //         {({count, setCount}) => (
  //             <div>
  //                 {count}
  //                 <button onClick={() => setCount(count + 1)}>+</button>
  //             </div>
  //         )}
  //     </Counter>
  // </div>
  const [rows, setRows] = useState([
    {
      id: "45",
      name: "Digikey",
      website: "www.digikey.com",
    },
  ]);

  return (
    <div style={{ textAlign: "center" }}>
      <SuppliersForm
        onSubmit={(data) => {
          setRows((currentRows) => [
            {
              id: generate(),
              ...data,
            },
            ...currentRows,
          ]);
        }}
      />
      <SuppliersTable rows={rows} />
    </div>
  );
};

export default App;
