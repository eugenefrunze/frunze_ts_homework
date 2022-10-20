class Vechicle {
    constructor(name: string, manufacturer: string, color?: string){
        this.name = name;
        this.manufacturer = manufacturer;
        this.color = 'black';
        if(color){
            this.color = color;
        }
    }

    name: string;
    manufacturer: string;
    color: string;
}

class Car extends Vechicle {
    constructor(name: string, manufacturer: string, color?: string, trunkOpenStatus?: boolean){
        super(name, manufacturer, color);
        this.trunkOpenStatus = false;
        if(trunkOpenStatus !== undefined){
            this.trunkOpenStatus = trunkOpenStatus;
        }
    }

    trunkOpenStatus: boolean;

    OpenTrunk(): boolean {
        this.trunkOpenStatus = true;
        return this.trunkOpenStatus;
    }

    CloseTrunk(): boolean {
        this.trunkOpenStatus = false;
        return this.trunkOpenStatus;
    }
}

class Bike extends Vechicle {
    constructor(name: string, manufacturer: string, color?: string, flightDuration?: number){
        super(name, manufacturer, color);
        this.flightDuration = 2;
        if(flightDuration !== undefined){
            this.flightDuration = flightDuration;
        }
    }

    flightDuration: number;

    Fly(howLong: number): void {
        console.log(`HowLonginess is: ` + howLong);
    }

}