class Chain {
    constructor(body1,body2) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.3,
            length: 10
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display() {

        var ptA = this.chain.bodyA.position;
        var ptB = this.chain.bodyB.position;
        line(ptA.x,ptA.y,ptB.x,ptB.y);
    }

}