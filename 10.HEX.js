class Hex {
    constructor(value) {
        this.value = value;
    }

    toString() {
        return `0x${(this.value.toString(16)).toUpperCase()}`;
    }

    valueOf() {
        return this.value;
    }

    plus(input) {
        if (typeof (input) === 'object') {
            return new Hex(this.value + input.value);
        } else {
            return new Hex(this.value + input);
        }
    }

    minus(input) {
        if (typeof (input) === 'object') {
            return new Hex(this.value - input.value);
        } else {
            return new Hex(this.value - input);
        }
    }

    parse(input){
        return parseInt(input, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
