// const basicData = {
//     columns: [{
//         label: 'EMPLOYEES',
//         field: 'employees',
//         sort: true,
//         width: 300,
//         fixed: true
//       },
//       {
//         label: 'POSITION',
//         field: 'position',
//         sort: false,
//         width: 200
//       },
//       {
//         label: 'START DATE',
//         field: 'date',
//         sort: false,
//         width: 200,
//       },
//       {
//         label: 'LAST ACTIVITY',
//         field: 'activity',
//         sort: false,
//         width: 200
//       },
//       {
//         label: 'CONTACTS',
//         field: 'contacts',
//         sort: true,
//         width: 200
//       },
//       {
//         label: 'AGE',
//         field: 'Age',
//         sort: false,
//         width: 200,
//       },
//       {
//         label: 'ADDRESS',
//         field: 'address',
//         sort: false,
//         width: 200,
//       },
//       {
//         label: 'SALARY',
//         field: 'salary',
//         sort: false,
//         width: 200,
//       },
//     ],
//     rows: [
//       ['Tiger Nixon', 'System Architect', '2011/04/25', '2021/03/08', 'tnixon12@example.com', 61, 'Edinburgh', '$320,800'],
//       ['Sonya Frost', 'Software Engineer', '2008/12/13', '2021/03/08', 'sfrost34@example.com', 23, 'Edinburgh', '$103,600'],
//       ['Jena Gaines', 'Office Manager', '2008/12/19', '2021/03/08', 'jgaines75@example.com', 30, 'London', '$90,560'],
//       ['Quinn Flynn', 'Support Lead', '2013/03/03', '2021/03/08', 'qflyn09@example.com',  22, 'Edinburgh', '$342,000'],
//       ['Charde Marshall', 'Regional Director', '2008/10/16', '2021/03/08', 'cmarshall28@example.com', 36, 'San Francisco', '$470,600'],
//       ['Haley Kennedy', 'Senior Marketing Designer', '2012/12/18', '2021/03/08', 'hkennedy63@example.com', 43, 'London', '$313,500'],
//       ['Tatyana Fitzpatrick', 'Regional Director', '2010/03/17', '2021/03/08', 'tfitzpatrick00@example.com', 19, 'Warsaw', '$385,750'],
//     ],
//   };
  
//   const datatable = document.getElementById('datatable');
  
//   // new mdb.Datatable(datatable, basicData);
//   datatable.append(basicData);



var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

window.onload = fetch('/admin/query', {
  method: 'GET',
  
 })
 .then(response => response.json())
 .then(result => {
   console.log(typeof result);
  console.log(result.length);
  for (var i = 0; i < result.length; i++) {
    // creates a table row
    // var row = document.createElement("tr");

    
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      // var cell = document.createElement("td");
      // var cellText = document.createTextNode(result[i].name);
      // cell.appendChild(cellText);
      // row.appendChild(cell);
      // var cellText = document.createTextNode(result[i].email);
      // cell.appendChild(cellText);
      // row.appendChild(cell);
      // var cellText = document.createTextNode(result[i].message);
      // cell.appendChild(cellText);

      // row.appendChild(cell);

      var newRow = tbodyRef.insertRow();

// Insert a cell at the end of the row
var newCell1 = newRow.insertCell();

// Append a text node to the cell
var newText1 = document.createTextNode(result[i].name );
newCell1.appendChild(newText1);

var newCell2 = newRow.insertCell();

// Append a text node to the cell
var newText2 = document.createTextNode(result[i].email );
newCell2.appendChild(newText2);

var newCell3 = newRow.insertCell();

// Append a text node to the cell
var newText3 = document.createTextNode(result[i].subject );
newCell3.appendChild(newText3);
var newCell4 = newRow.insertCell();

// Append a text node to the cell
var newText4 = document.createTextNode(result[i].message );
newCell4.appendChild(newText4);

    // add the row to the end of the table body
    // tbodyRef.appendChild(row);
  }


 });



 function generate_table() {
  

  

  // creating all cells
  

  // put the <tbody> in the <table>
  // tbl.appendChild(tblBody);
  // appends <table> into <body>
  // body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  // tbl.setAttribute("border", "2");
}