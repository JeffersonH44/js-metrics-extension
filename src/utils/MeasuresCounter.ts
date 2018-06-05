export default class MeasuresCounter {
    
    constructor(path:string, pack:string, startLine:number, endLine:number, commit:number) {
        this.path = path;
        this.pack = pack;
        this.startLine = startLine;
        this.endLine = endLine;
        this.commit = commit;
    }

    get getPack():string {
        return this.pack;
    }

    public countFor() {
        this.fors++;
    }

    public countIf() {
        this.ifs++;
    }

    public countOperator(operator: string): void {
        this.uniqueOperators.add(operator);
        this.operators++;
    }

    public countOperands(operand: string): void {
        this.uniqueOperands.add(operand);
        this.operands++;
    }

    public toString(): string {
        return [this.path, this.commit, this.LOC(), this.volume(), 
                this.difficulty(), this.effort(), this.timeToUnderstand(),
                this.bugsDelivered(), this.cyclomaticComplexity(), this.pack]
            .join(',');
    }

    private LOC() {
        return this.endLine - this.startLine;
    }

    private volume(): number {
        var N = this.operands + this.operators;
        var n = this.uniqueOperands.size + this.uniqueOperators.size;
        return N * Math.log2(n);
    }

    private difficulty(): number {
        return (this.uniqueOperators.size / 2.0) * (this.operands / this.uniqueOperands.size);
    }

    private effort(): number {
        return this.difficulty() * this.volume();
    }

    private timeToUnderstand(): number {
        return this.effort() / 18;
    }

    private bugsDelivered(): number {
        return Math.pow(this.effort(), 2.0/3.0) / 3000;
    }

    private cyclomaticComplexity() {
        return this.fors + this.ifs + 1;
    }
 
    private uniqueOperators:Set<string> = new Set<string>();
    private uniqueOperands:Set<string> = new Set<string>();
    private operators:number = 0;
    private operands:number = 0;
    private fors:number = 0;
    private ifs:number = 0;
    private path:string;
    private pack:string;
    private startLine:number;
    private endLine:number;
    private commit:number;
}