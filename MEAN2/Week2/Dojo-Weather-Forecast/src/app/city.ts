export class City {
    private name: string;
    private humidity: number;
    private tempLow: number;
    private tempHigh: number;
    private tempAvg: number;
    private status: string;

    constructor(name="", humidity=0, tempLow=0, tempHigh=0, status=""){
        this.name = name;
        this.humidity = humidity;
        this.tempLow = tempLow;
        this.tempHigh = tempHigh;
        this.tempAvg = Math.floor((tempLow + tempHigh) / 2);
        this.status = status;
    }

    getCity(){
        return {
            name: this.name,
            humidity: this.humidity,
            tempLow: this.tempLow,
            tempHigh: this.tempHigh,
            tempAvg: this.tempAvg,
            status: this.status
        }
    }
}
