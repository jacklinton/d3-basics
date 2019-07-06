import * as d3 from 'd3';

export default function tableFactory(_rows) {
    const rows = Array.from(_rows);
    const header = rows.shift(); // Remove the first row for the header
    const data = rows; // Everything else is a normal data row

    const table = d3.select('body')
        .append('table')
        .attr('class', 'table');

    const tableHeader = table.append('thead')
        .append('tr');

    const tableBody = table.append('tbody');

    // Each element in "header" is a string.
    header.forEach(value => {
        tableHeader.append('th')
            .text(value);
    });

    // Each element in "data" is an array
    data.forEach(row => {
        const tableRow = tableBody.append('tr');

        row.forEach(value => {
            // Now, each element in "row" is a string
            tableRow.append('td')
                .text(value);
        });
    });


    return {
        table,
        header,
        data,
    };
}
