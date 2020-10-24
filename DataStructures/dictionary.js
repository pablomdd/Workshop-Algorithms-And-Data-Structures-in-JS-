function Dictionary(){
    var items = {};
   
       this.has = function(key){
        return key in items;
       };
   
       this.set = function(key, value){
        items[key] = value; 
       };
   
       this.delete = function(key){
        if (this.has(key)){
            delete items[key];
            return true;
        }
        return false;
       };


       this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
       };
   
       this.values = function(){
        var values = [];
        for (var k in items) { 
            if (this.has(k)) {
                values.push(items[k]); 
            }
        }
        return values;
       };
   
       this.keys = function(){
        return Object.keys(items);
       };
       
       this.getItems = function(){
        return items;
       }
   }
   
   // Usage
   let dictionary = new Dictionary();
   dictionary.set('Héctor', 'hector@gdgunam.com');
   dictionary.set('Mau', 'mau@gdgunam.com');
   
   console.log(dictionary.keys());
   console.log(dictionary.values());
   console.log(dictionary.get('Mau'));
   
   dictionary.delete('Héctor');