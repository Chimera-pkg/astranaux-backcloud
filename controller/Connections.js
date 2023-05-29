import Connection from "../models/ConnModel.js";
import Speed from "../models/SpeedModel.js";

export const latestConn = async (req, res) => {
    try {
        const conn = await Connection.findOne({
            order: [['timestamp', 'DESC']]
        });
        res.json(conn);
    } catch (error) {
        res.status(500).json({error});
    }
};

export const latestSpeed = async (req, res) => {
    try {
        const conn = await Speed.findOne({
	    attributes: ['ping_ms', 'testfrom', 'host', 'up_mbps', 'down_mbps', 'timestamp'],
            order: [['timestamp', 'DESC']]
        });
        res.json(conn);
    } catch (error) {
        res.status(500).json({error});
    }
};
