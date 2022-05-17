import "./styles.css";
import ReactDOM from "react-dom";
import React from "react";
import Header from "./Header";

// MyJavascriptGood(){}// pascal case
// myJavascriptGood(){}// camel case
//2 ways, 1) class component 2) functional component
// class Page extends React.Component{
//  render(){
//   return (
//     <div className="sample" id="" width="" >
//     <header>
//       <nav>
//         <div>Logo</div>
//         <ul className="nav-items">
//           <li>Menu</li>
//           <li>Pricing</li>
//           <li>Contact</li>
//           </ul>
//       </nav>
//     </header>
//     <h1>Exited Learning React</h1>
//     <ol>
//       <li>It's is light wieght library and used to create Single page applications(SPA)</li>
//       <li>It's helps to get a job as a developer</li>
//     </ol>
//     <footer><small>@2022 copy right</small></footer>
//   </div>)
//  }
// }

function Footer() {
  return (
    <footer>
      <small>@2022 copy right</small>
    </footer>
  );
}
function MainContent() {
  return (
    <div>
      <h1>Exited Learning React</h1>
      <ol>
        <li>
          It's is light wieght library and used to create Single page
          applications(SPA)
        </li>
        <li>It's helps to get a job as a developer</li>
      </ol>
    </div>
  );
}
function Page() {
  return (
    <div className="sample" id="" width="">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
