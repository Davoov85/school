const apiRouter = require("express").Router();

const School = require('school-kr')
const school = new School()

school.init(School.Type.HIGH, School.Region.GYEONGGI, 'J100000818')
const example = async function() {
  const meal = await school.getMeal();
  return(meal.today)
  
}


apiRouter.post('/meal', async function(req, res) {
  const result = await example();
  console.log(req.body);


  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: result
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

module.exports = apiRouter;