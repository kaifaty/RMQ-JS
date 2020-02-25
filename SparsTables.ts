class SparsTables{
    readonly data: any[];
    readonly prop: string;
    readonly type: string;
    ST: number[];

    constructor(data: any[], type: string = 'min', prop?: string){
        this.data = data;
        this.prop = prop;
        if(type !== "min" && type !== "max"){
            console.log("Type must be MIN or MAX");
            return;
        }
        this.type = type;
        this.getSparse();
    }

    getSparse(){
        let kMax = Math.ceil(Math.log(this.data.length));
        let _ST = [];

        for(let k = 0; k <= kMax; k ++){
            _ST[k] = [];
            for(let n = 0; n < this.data.length; n++){
                if(k === 0){
                    if(this.prop){
                        _ST[k][n] = this.data[n][this.prop];
                    }
                    else{
                        _ST[k][n] = this.data[n];
                    }
                    if(typeof _ST[k][n] !== 'number'){
                        console.log("Property is not a number");
                        return false;
                    }
                }
                else{
                    let index = n + 2 ** (k - 1);
                    if(_ST[k - 1][index]){
                        _ST[k][n] = Math[this.type](_ST[k - 1][n], _ST[k - 1][index]);
                    }

                }

            }
        }
        this.ST = _ST;
    }

    query(i: number, j: number){
        if(!this.ST){
            return false;
        }
        let k = Math.ceil(Math.log(j - i + 1));
        return Math[this.type](this.ST[k][i], this.ST[k][j - 2 ** k + 1]);
    }

}





export {
    SparsTables
}
