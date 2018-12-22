class Hash {
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    basicHash(val){
        let total = 0;
        for(let char of val){
            let value = char.charCodeAt(0) - 96;
            total += value % this.keyMap.length;
        }
        return total;
    }

    _hash(val){
        let total = 0;
        let weirdPrime = 31;
        for(let i = 0; i < Math.min(val.length, 100); i++){
            let char = val[i];
            let value = char.charCodeAt(0);
            total = (total * weirdPrime +  value) % this.keyMap.length;
        }
        return total;
    }

    set(key, val){
        let idx = this._hash(key);
        let newArr = [key, val]
        if(!this.keyMap[idx]){
            this.keyMap[idx] = [];
        }

        this.keyMap[idx].push(newArr);
        return this.keyMap
    }

    get(key){
       let idx = this._hash(key);
       let keyMapIdx = this.keyMap[idx]
       if(!keyMapIdx){
           return undefined;
        } else if(keyMapIdx){
            for(let i = 0; i < keyMapIdx.length; i++){
                if(keyMapIdx[i][0] === key){
                    return keyMapIdx[i][1]
                }
            }
        }
        return undefined
    }

    keys(){
        let final = [];
        let keyMap = this.keyMap
        for(let i = 0; i < keyMap.length; i++){
            if(keyMap[i]){
                for(let j = 0; j < keyMap[i].length; j++){
                    final.push(keyMap[i][j][0])
                }
            }
        }
        return final;
    }

    values(){
        let final = [];
        let keyMap = this.keyMap
        for(let i = 0; i < keyMap.length; i++){
            if(keyMap[i]){
                for(let j = 0; j < keyMap[i].length; j++){
                    if(!final.includes(keyMap[i][j][1])){
                        final.push(keyMap[i][j][1])
                    }
                }
            }
        }
        return final;
    }

}

let table = new Hash(5);
table.set("apple", "test 1")
table.set("pie", "test 1")

table.set("appld", "test 2");
table.set("mr", "shozen");
table.set("mrs", "show")
