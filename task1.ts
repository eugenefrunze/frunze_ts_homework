enum DirectionsOfMarket{
    TOP = 'TOP',
    BOTTOM = 'BOTTOM'
}

function calcInvestitions (amountOfMoney: number, percent: number, direction?: DirectionsOfMarket): number {
    switch (direction) {
        case DirectionsOfMarket.TOP: {
            return amountOfMoney + ((percent/100) * amountOfMoney);
        }
        case DirectionsOfMarket.BOTTOM: {
            return amountOfMoney - ((percent/100) * amountOfMoney);
        }
        default:
            return amountOfMoney;
    }
}

// console.log(calcInvestitions(200, 25, DirectionsOfMarket.TOP));