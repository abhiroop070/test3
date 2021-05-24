class Birds extends Parent{
    constructor(x,y,w,h){
        super(x,y,w,h)
        this.image=loadImage('sprites/bird.png')
        this.smk=loadImage('sprites/smoke.png')
       this.trajectory=[]

    }
    displays(){
        super.displays()
        if(this.body.velocity.x>10 && this.body.position.x>200){
            

         var position=[this.body.position.x,this.body.position.y]
        this.trajectory.push(position)
        }
        
        for(var i=0;i<this.trajectory.length;i++){
            image(this.smk,this.trajectory[i][0],this.trajectory[i][1])
        }





    }

}