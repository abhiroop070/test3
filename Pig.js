class Pig extends Parent {
    constructor(x,y,w,h){
        super(x,y,w,h)
       this.image=loadImage('sprites/enemy.png')
       this.Visibility=255

    }
   displays() {
       if (this.body.speed<2){
        super.displays()
           


       }
       else{
           world.remove(wr,this.body)
           push()
           this.Visibility=this.Visibility-5
           tint(255,this.Visibility)
           image(this.image,this.body.position.x,this.body.position.y,60,60)
        pop()
        }

      
       //console.log(this.body.speed)

   }

}