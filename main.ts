import {SparsTables} from "./SparsTables";

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


let ST = new SparsTables(data, 'max', 'rate');
let max = ST.query(3, 4);
console.log(max)
