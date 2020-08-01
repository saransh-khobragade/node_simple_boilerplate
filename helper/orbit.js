class Orbit {
    constructor(name,miles,orbit_traffic_speed,weather) {
        this.name = name
        this.miles = miles
        this.orbit_traffic_speed = parseInt(orbit_traffic_speed)
        this.weather = weather
    }
}
class BestOrbit{
    constructor(orbit_traffic_speed_array) {
        this.orbit_traffic_speed_array = orbit_traffic_speed_array
    }
    best_route(){
        let min_time = 9999
        let final_vehicle = ""
        let final_orbit = ""
        let prioroty_of_vehicle = ["bike","tuktuk","car"]

        this.orbit_traffic_speed_array.forEach(o => {  
            o.weather.vehicles.forEach(v=>{
                let time = 0

                if(o.orbit_traffic_speed <= v.speed){
                    v.speed = o.orbit_traffic_speed 
                }

                time += o.miles/v.speed
                time += (o.weather.craters*v.crater_cross_time)/60

                if(time<min_time){
                    min_time = time
                    final_vehicle = v.name
                    final_orbit = o.name
                }else if(time == min_time){
                    min_time = time
                    final_orbit = o.name
                    
                    let c_v = prioroty_of_vehicle.indexOf(v.name)
                    let f_v = prioroty_of_vehicle.indexOf(final_vehicle)

                    if(f_v>c_v){
                        final_vehicle = v.name
                    }
                }
            })
        }); 
        
        return [final_vehicle,final_orbit]
    }
}

module.exports = { BestOrbit, Orbit }