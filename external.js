//Creating React element it is always a javascript object
const containerDiv = React.createElement(
  "div",
  { className: "container" },
  React.createElement("div", { className: "row" },
  [React.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 p-2 box"},"1"),//here basicall i use array because the .row div have multiple child
  React.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 p-2 box"},"2"),
  React.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 p-2 box"},"3"),
  React.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 p-2 box"},"4")]
  )
);

//basically in which element you want to use React functionality
const root = ReactDOM.createRoot(document.getElementById("root"));

//render convert it to html tags
root.render(containerDiv);
