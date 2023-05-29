import Waypoints from "../models/WayModel.js";

export const getWaypoints = async(req, res) =>{
    try {
        const response = await Waypoints.findAll({
            attributes: ['id','name', 'code', 'latitude', 'longitude', 'altitude', 'status']
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const addWaypoint = async(req, res) =>{
    const { name, code, latitude, longitude, altitude, status} = req.body;

    try {
        await Waypoints.create({
            name: name,
            code: code,
            latitude: latitude,
            longitude: longitude,
            altitude: altitude,
            status: status,
        });

        res.status(200).json({msg: "Add waypoint success"});
    } catch (error) {
        res.status(500).json({error});
    }
}

export const editWaypoints = async(req, res) =>{
    try {
        await Waypoints.update(req.body, {
            where:{
                id: req.params.id
            }
        });

        res.status(200).json({msg: "Update success"});
    } catch (error) {
        res.status(500).json({error});
    }
}

export const deleteWaypoints = async(req, res) =>{
    try {
        await Waypoints.destroy({
            where:{
                id: req.params.id
            }
        });

        res.status(200).json({msg: "Delete success"});
    } catch (error) {
        res.status(500).json({error});
    }
}
