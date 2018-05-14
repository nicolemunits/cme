var express = require('express');
var path= require('path');

var pathRouter = express.Router();

//levels

pathRouter.route('/airplane').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/airplane.html'));
});

pathRouter.route('/airplane1').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/airplane1.html'));
});

pathRouter.route('/levels').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/levels.html'));
});

//girl or boy

/*pathRouter.route('/levels/types').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/types.html'));
});*/


//boys 

pathRouter.route('/levels/boys').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/boys.html'));
});

//farman
pathRouter.route('/levels/boys/farman').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/farman.html'));
});
pathRouter.route('/levels/boys/farman1').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/farman1.html'));
});
pathRouter.route('/levels/boys/farman4').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/farman4.html'));
});

pathRouter.route('/levels/boys/farman/farman2').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/farman2.html'));
});

pathRouter.route('/levels/boys/farman/farman2/farman3').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/farman3.html'));
});

//fireman
pathRouter.route('/levels/boys/fireman').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/fireman.html'));
});
pathRouter.route('/levels/boys/fireman/fireman2').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/fireman2.html'));
});
pathRouter.route('/levels/boys/fireman/fireman2').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/fireman2.html'));
});
pathRouter.route('/levels/boys/fireman/fireman2/fireman3').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/fireman3.html'));
});
//basketball player
pathRouter.route('/levels/boys/basketball').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/basketball.html'));
});
pathRouter.route('/levels/boys/basketball/basketball2').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/basketball2.html'));
});
pathRouter.route('/levels/boys/basketball/basketball2/basketball3').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/basketball3.html'));
});

//superman

pathRouter.route('/levels/boys/superman').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/superman.html'));
});
pathRouter.route('/levels/boys/superman/superman2').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/superman2.html'));
});
pathRouter.route('/levels/boys/superman/superman2/superman3').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/superman3.html'));
});

////superwoman

pathRouter.route('/levels/boys/superwoman').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/superwoman.html'));
});
pathRouter.route('/levels/boys/superwoman/superwoman2').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/superwoman2.html'));
});
pathRouter.route('/levels/boys/superwoman/superwoman2/superwoman3').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/superwoman3.html'));
});


// pathRouter.route('/levels/boys/glass').get(function(req, res){  
//     res.sendFile(path.join(__dirname, '../views/glass.cur'));
// });


//girls

 /*pathRouter.route('/levels/types/girls').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/girls.html'));
});

//Rapunzel

pathRouter.route('/levels/types/girls/Rapunzel').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/reponzel.html'));
});

pathRouter.route('/levels/types/girls/Rapunzel/Rapunzel2').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/reponzel2.html'));
});

pathRouter.route('/levels/types/girls/Rapunzel/Rapunzel2/Rapunzel3').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/reponzel3.html'));
});

//Elsa

pathRouter.route('/levels/types/girls/Elsa').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/elsa.html'));
});

pathRouter.route('/levels/types/girls/Elsa/Elsa2').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/elsa2.html'));
});

pathRouter.route('/levels/types/girls/Elsa/Elsa2/Elsa3').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/elsa3.html'));
});

//Superwoman

pathRouter.route('/levels/types/girls/Superwoman').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/superwoman.html'));
});

pathRouter.route('/levels/types/girls/Elsa/Superwoman2').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/superwoman2.html'));
});

pathRouter.route('/levels/types/girls/Superwoman/Superwoman2/Superwoman3').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/superwoman3.html'));
});

//Dora

pathRouter.route('/levels/types/girls/Dora').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/dora.html'));
});

pathRouter.route('/levels/types/girls/Elsa/Dora2').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/dora2.html'));
});

pathRouter.route('/levels/types/girls/Dora/Dora2/Dora3').get(function(req, res){  
    res.sendFile(path.join(__dirname, '../views/dora3.html'));
});

*/

module.exports = pathRouter;