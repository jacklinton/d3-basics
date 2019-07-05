import * as d3 from 'd3';

const chart = d3.select('body')
    .append('svg')
    .attr('id', 'chart');

const req = new window.XMLHttpRequest();
req.addEventListener('load', mungeData);
req.open('GET', 'data/EU-referendum-result-data.csv');
req.send();

function mungeData() {
    const data = d3.csvParse(this.responseText);
    const regions = data.reduce((last, row) => {
        if (!last[row.Region]) last[row.Region] = [];
        last[row.Region].push(row);
        return last;
    }, {});
    const regionsPctTurnout = Object.entries(regions)
        .map(([region, areas]) => ({
            region,
            meanPctTurnout: d3.mean(areas, d => p.Pct_Turnout),
        }));

    renderChart(regionsPctTurnout);
}
