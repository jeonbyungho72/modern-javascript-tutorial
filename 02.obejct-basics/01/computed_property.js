let fruit = "사과";

const bag = {
    [fruit + "Count"]: 12
}

console.log(`${fruit}의 개수`, bag[fruit + "Count"]);