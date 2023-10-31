
import React from "react";
import './Resume.css'
 
const App = () => {
 
    // Function will execute on click of button
    const onButtonClick = () => {
     
        // using Java Script method to get PDF file
        fetch("./Laurie-Resume.pdf").then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Laurie-Resume.pdf";
                alink.click();
            });
        });
    };
    return (
        <>
        {/* <div className="container"> */}
                {/* <button className="resume-pdf" onClick={onButtonClick}>
                    Download a PDF of my resume
                </button> */}
                {/* </div> */}
        </>
    );
};
 
export default App;