
(function(){
    var app = angular.module('lib', []);
    
    app.controller('BooksController', ["$http", function($http) 
    {
        var storage = this;
        //this path is correct on my computer
        $http.get("http://localhost/OW/idvProject6/scripts/dbcon.php/book").success(function(data)
        {
            storage.info = data;
            console.log(storage);
            console.log("Hi there");
        });
        
    }]);

    app.controller('FilterController', function() 
    {
        this.filter = "";
        
        this.isGenre = function(genre) {
            if (this.filter === "All")
            {
                return this.filter;
            }
            return this.filter === genre;
        };
        
    }); 
    
    
})();
