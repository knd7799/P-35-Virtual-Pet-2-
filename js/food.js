class Food {
    constructor (){
         this.foodStock=0
         this.lastFed ;
         this.image=loadImage("images/milk.png")
    }

   /* getFoodStock (){
        var foodCountRef = database.ref('foodCount');
    foodCountRef.on("value",function(data){
      foodCount = data.val();
    })
  }


    updateFoodStock (count){
        database.ref('/').update({
           foodCount : count 
        });
    }

    deductFood (deduct){
       database.ref('/').deduct({
           foodDeduct : deduct
       });
    }*/
    updateFoodStock(foodStock){
      this.foodStock=foodStock;
    }

    getFeedTime(lastFed){
      this.lastFed=lastFed;
    }
    deductFood(){
      if(this.foodStock>0){
        this.foosStock=this.foodStock-1;
      }
    }
    getFoodStock(){
      return this.foodStock;
    }

 display(){
 
    var x=80,y=100;

    imageMode(CENTER);
    image(this.image,720,220,70,70);

    if(this.foodStock!==0){
        for(var i=0;i<this.foodStock;i++){
           if(i%10==0){
            x=80;
            y=y+50;
           } 
           image(this.image,x,y,50,50);
           x=x+30;
        }
    }
  }
 
} 
