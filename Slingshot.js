class Slingshot{

    constructor(bA,bB){
        var opt={
            bodyA:bA,
            pointB:bB,
            lenght:10,
            stiffness:0.04

        }
        this.pointB=bB
        this.s1=loadImage("sprites/sling1.png")
        this.s2=loadImage("sprites/sling2.png")
        this.s3=loadImage("sprites/sling3.png")
        this.sling=con.create(opt)

        world.add(wr,this.sling)

    
    }
    displays() {
        image(this.s1,200,20)
        image(this.s2,170,20)
        if (this.sling.bodyA){
        var pointa=this.sling.bodyA.position
        var pointb=this.pointB
        stroke(48,22,8)
        if(pointa.x<220){
            strokeWeight(7)
            line(pointa.x-20,pointa.y,pointb.x-10,pointb.y)
            line(pointa.x-20,pointa.y,pointb.x+30,pointb.y-3)
            image(this.s3,pointa.x-30,pointa.y-10,15,30)
        }
        else{
            strokeWeight(7)
            line(pointa.x+25,pointa.y,pointb.x-10,pointb.y)
            line(pointa.x+25,pointa.y,pointb.x+30,pointb.y-3)
            image(this.s3,pointa.x+25,pointa.y-10,15,30)
        }
      
    }
}
    fly() {
        this.sling.bodyA=null

    }

    attach(body) {
        this.sling.bodyA=body

    }
    
}
