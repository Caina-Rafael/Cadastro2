window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
  });
  
  const functionApiUrl = 'https://getresumecounter1610.azurewebsites.net';
  const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';
  
  const getVisitCount = () => {
    // Initially set count to a default value
    let count = 30;
  
    fetch(functionApiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
  };
  
