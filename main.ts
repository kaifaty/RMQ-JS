import {SparseTables} from "./src/SparseTables";

let data = [
    {date: 0, rate: 100},
    {date: 0, rate: 414},
    {date: 0, rate: 51},
    {date: 0, rate: 61},
    {date: 0, rate: 44},
    {date: 0, rate: 512},
    {date: 0, rate: 63},
    {date: 0, rate: 734},
    {date: 0, rate: 86},
    {date: 0, rate: 11},
];
let data1 = [5, 634, 63, 7, 85, 3634, 7478, 8];


let ST = new SparseTables(data, 'max', 'rate');
let max = ST.query(3, 4);


let ST1 = new SparseTables(data1, 'max');
let max2 = ST1.query(3, 7);

console.log(max, max2)
