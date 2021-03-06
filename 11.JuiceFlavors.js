function juiceFlavors(inputJuices) {
    let juices = {};
    let bottles = {};

    inputJuices.forEach(element => {
        let [name, quantity] = element.split(' => ');

        if (!juices[name]) {
            juices[name] = Number(quantity);
        } else {
            juices[name] += Number(quantity);
        }

        if (juices[name] >= 1000) {
            while (juices[name] >= 1000) {
                juices[name] -= 1000;
                if (!bottles[name]) {
                    bottles[name] = 1;
                } else {
                    bottles[name] += 1;
                }
            }
        }
    });

    let result = [];
    for (const [key, value] of Object.entries(bottles)) {
        result.push(`${key} => ${value}`);
    }

    return result.join('\n');
}

console.log(juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
));
console.log(juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
));