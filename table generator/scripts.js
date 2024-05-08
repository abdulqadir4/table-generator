function generateTable() {
    var rows = parseInt(document.getElementById("rows").value);
    var cols = parseInt(document.getElementById("cols").value);
  
    var tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = ""; // Clear previous table if exists
  
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
      tableContainer.innerHTML = "<p>Please enter valid number of rows and columns.</p>";
      return;
    }
  
    var table = "<table>";
    for (var i = 0; i < rows; i++) {
      table += "<tr>";
      for (var j = 0; j < cols; j++) {
        table += "<td>Row " + (i + 1) + ", Column " + (j + 1) + "</td>";
      }
      table += "</tr>";
    }
    table += "</table>";
  
    tableContainer.innerHTML = table;
  }
  