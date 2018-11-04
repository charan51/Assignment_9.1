function createObject(){
    this.Name = "Charan";
    this.Height = "180CM";
    this.Aboutyourself = function() {
        console.log(`I am ${this.Name}. I am ${this.Height} height`);
    }
}
var me = new createObject();
console.log(me.Aboutyourself());