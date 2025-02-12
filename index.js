/*class parent
      {
         constructor(gname,gamount)
         {
            this.gname = gname
            this.gamount = gamount
         }
         displayParent(){
            console.log(`${this.gname} holds ₹${this.gamount}`)
         }
      }

class children extends parent
      { 
         constructor(gname,gamount,sname,samount)
         {
            super(gname,gamount)
            this.sname = sname
            this.samount = samount
         }
         displaychildren(){
            console.log(`${this.sname} holds ₹${this.samount}`)
         }
         totalAssets(){
            console.log(`${this.gname} and ${this.sname} amount is added for ₹${Number(this.gamount)+Number(this.samount)}`)
         }
      }
let c1 = new children("Guna","1500","Rajesh","2000")

c1.displayParent()
c1.displaychildren()
c1.totalAssets()*/

/*class Movie
      {
         constrctor(title,studio,rating = 8.5/10){
               this.title = title
               this.studio = studio
               this.rating = rating
            }  
            displayMovie(){
                   console.log(`${this.title} movie is the studio of ${this.studio} one of the best and ${Number(this.rating)} is best rating of all time `)
            }          
         }
         let PG13 = new Movie("SPIDER MAN","MARVEL STUDIOS","8.5/10")
         PG13.displayMovie()*/
         
//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
class Movie
      {
         constructor(title)
         {
            this.title = title
         }
         displayMovie(){
            console.log(`${this.title}`)
         }
      }

class PG13 extends Movie
      { 
         constructor(title,studio,rating="PG")
         {
            super(title)
            this.studio = studio
            this.rating = rating
         }
         displayPG13(){
            console.log(`${this.title} movie is the studio of ${this.studio} is one of the best and ${this.rating} is best rating of all time `)
         }
      }
let R = new PG13("Casino Royale","Eon Productions","PG13")

R.displayMovie()
R.displayPG13()

//2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md


//3.Write a “person” class to hold all the details.
class Person{
   constructor(name,email,password,age,height,weight){
    this.name = name
    this.email = email
    this.password = password
    this.age = age
    this.height = height
    this.weight = weight
   }
   display(){
    console.log(this.name,this.email,this.password,Number(this.age),Number(this.height),Number(this.weight))
   }
}
let User = new Person("Guna","Guna@gmail.com","12345678",25,5.5 ,55)
User.display(JSON.stringify(User))


//4.write a class to calculate the Uber price.
class UberPriceCalculator {
   static BASE_FARE = 2.0;
   static PER_MILE_RATE = 1.5;
   static PER_MINUTE_RATE = 0.5;
   constructor(distance, duration) {
   this.distance = distance;
   this.duration = duration;
   }
   
   calculateFare() {
   const distanceFare = this.distance * UberPriceCalculator.PER_MILE_RATE;
   const timeFare = this.duration * UberPriceCalculator.PER_MINUTE_RATE;
   const totalFare = UberPriceCalculator.BASE_FARE + distanceFare + timeFare;
   return totalFare;
   }
   
   getDistance() {
   return this.distance;
   }
   
   setDistance(distance) {
   this.distance = distance;
   }
   
   getDuration() {
   return this.duration;
   }
   
   setDuration(duration) {
   this.duration = duration;
   }
   
   toString() {
   return `UberPriceCalculator[distance=${this.distance.toFixed(2)} miles, duration=${this.duration} minutes]`;
   }
   
   }
   const calculator = new UberPriceCalculator(5.5, 15);
   console.log(calculator.toString());
   const fare = calculator.calculateFare();
   console.log(`Total Fare: $${fare.toFixed(2)}`);


