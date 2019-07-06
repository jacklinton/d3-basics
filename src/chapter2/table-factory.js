import * as d3 from 'd3';

export default function tableFactory(_rows) {
    const rows = Array.from(_rows);
    const header = rows.shift(); // Remove the first row for the header
    const data = rows; // Everything else is a normal data row

    const table = d3.select('body')
        .append('table')
        .attr('class', 'table');

    return {
        table,
        header,
        data,
    };
}
