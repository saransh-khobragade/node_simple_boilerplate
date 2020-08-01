const { BestOrbit, Orbit } = require('../helper/orbit')
const Weather = require('../helper/weather');

exports.best_route = async (req, res) => {
    try{
        const weather = req.query.WEATHER || null
        const orbit1_speed = req.query.ORBIT_1_TRAFFIC_SPEED || null
        const orbit2_speed = req.query.ORBIT_2_TRAFFIC_SPEED || null

        if(!weather || !orbit1_speed || !orbit2_speed) throw Error("Invalid input")

        const orbit1 = new Orbit(
            "ORBIT1",
            constant["orbit1_miles"],
            orbit1_speed,
            new Weather(weather,constant["orbit1_craters"])
        )
        const orbit2 = new Orbit(
            "ORBIT2",
            constant["orbit2_miles"],
            orbit2_speed,
            new Weather(weather,constant["orbit2_craters"])
        )
            
        const bestOrbit = new BestOrbit([orbit1,orbit2])
    
        const result = bestOrbit.best_route().join(' ')
    
        return res.status(200).send({result});
    }catch(err){
        return res.status(400).send(err.message);
    } 
};