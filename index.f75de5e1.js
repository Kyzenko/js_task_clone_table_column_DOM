"use strict";
// write your code here
const tr = document.querySelectorAll("table tr");
tr.forEach((row)=>{
    row.cells[4].before(row.cells[1].cloneNode(true));
});

//# sourceMappingURL=index.f75de5e1.js.map