var phantom = require('phantom')

phantom.create(function(ph){
    ph.createPage(function(page) {
          page.open("http://www.google.com", function(status) {
                  page.render('google.pdf', function(){

                            console.log('Page Rendered');
                                    ph.exit();

                                          
                  });
                      
          });
            
    });
    
});
