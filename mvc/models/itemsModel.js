const Item = {
    name:"",
    description:"",
    seeInfo: function(){
        return `${this.name} and ${this.description}`
    },
    toJSON: function(){

        return {
            "name": this.name,
            "description": this.description
        }     

    }
}

module.exports = Item