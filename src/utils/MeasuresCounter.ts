export default class MeasuresCounter {
    
    constructor(commit:number) {
        this.commit = commit;
    }

    get getName():string|undefined {
        return this.name;
    }

    set setName(name:string) {
        this.name = name;
    }

    set setPath(path:string) {
        this.path = path;
    }

    set setStartLine(startLine:number) {
        this.startLine = startLine;
    }
    
    set setEndLine(endLine:number) {
        this.endLine = endLine;
    }

    public countFor(): void {
        this.fors++;
    }

    public countIf(): void {
        this.ifs++;
    }

    public add(other: MeasuresCounter): void {
        let otherOperators = Array.from(other.uniqueOperators);
        for(var i = 0; i < otherOperators.length; ++i) {
            this.countOperator(otherOperators[i]);
        }

        let otherOperands = Array.from(other.uniqueOperands);
        for(var i = 0; i < otherOperands.length; ++i) {
            this.countOperands(otherOperands[i]);
        }

        this.ifs += other.ifs;
        this.fors += other.fors;
        this.operands += (other.operands - otherOperands.length);
        this.operators += (other.operators - otherOperators.length);
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
        if(!this.path || !this.name || !this.startLine || !this.endLine) {
            throw new RangeError(`Path established: ${this.path}, name established: ${this.name}, (${this.startLine}:${this.endLine})`);
        }

        return [this.path, this.commit, this.LOC(), this.volume(), 
                this.difficulty(), this.effort(), this.timeToUnderstand(),
                this.bugsDelivered(), this.cyclomaticComplexity(), this.name]
            .join(',');
    }

    private LOC() {
        if(this.endLine === undefined || this.startLine === undefined) {
            throw new RangeError("error on LOC");
        }

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
    private path:string|undefined = undefined;
    private name:string|undefined = undefined;
    private startLine:number|undefined = undefined;
    private endLine:number|undefined = undefined;
    private commit:number;
}