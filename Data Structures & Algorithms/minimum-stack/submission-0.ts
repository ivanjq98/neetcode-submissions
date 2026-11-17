class MinStack {
    // S: O(n)
    // T: O(1)
    private stack: number[] = []; // One array (the stack)
    private min: number = Infinity; // One number (not a stack)

    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push(0); // goes into the stack box
            this.min = val; // val goes into the min box 
            // E.g. this.stack: [0]        this.min: 5
        } else {
            this.stack.push(val - this.min);
            // Into this object's stack, push (the new value minus
            // this object's current min)
            
            // E.g. this.stack: [0]        this.min: 5
            // push(8)  8-5=3
            //      this.stack: [0, 3]     this.min: 5
            // push(2)  2-5=-3
	          //      this.stach: [0,3, -3]  this.min: 5
            if (val < this.min) this.min = val;
            //      this.stack: [0, 3, -3] this.min: 2
        }
    }

    pop(): void {
        if (this.stack.length === 0) return;
        const diff = this.stack.pop()!;
        		// pop()  the min must be restored: 2-(-3)=5
						//      this.stack:[0, 3]     this.min: 5
        if (diff < 0) this.min -= diff;
    }

    top(): number {
        const diff = this.stack[this.stack.length - 1];
        return diff > 0 ? diff + this.min : this.min;
    }

    getMin(): number {
        return this.min;
    }
}