# Realization of Range Min | Max query on JS




#### Sparse Tables (online, static)
    Preprocess      - O (n * log(n))
    Fetch           - O (1)
    Memory          - O (n * log(n))


Get max of rate
```$xslt

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


let ST = new SparseTables(data, 'max', 'rate');
let max = ST.query(3, 4);
```


Get max value in array

```
let data = [5, 634, 63, 7, 85, 3634, 7478, 8];

let ST = new SparseTables(data, 'max');
let max = ST.query(3, 7);
```

