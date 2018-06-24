export class TimeZone {
    abbr: String;
    offset: number;

    constructor(abbr: String, offset: number) {
        this.abbr = abbr;
        this.offset = offset;
    }
}
