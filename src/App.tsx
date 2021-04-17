import React from "react";
// import { Counter } from "./Counter";
import { SuppliersForm } from "./SuppliersForm";

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
  return (
    <div style={{ textAlign: "center" }}>
      <SuppliersForm
        onSubmit={({ name, website }) => {
          console.log(name, website);
        }}
      />
    </div>
  );
};

export default App;
