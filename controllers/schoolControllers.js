import {db} from "../db.js";
import {getDistance} from "../utils/distance.js";

export const addSchool = async (req, res) => {
    const {name, address, latitude, longitude} = req.body;

    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({message: "All fields are required"});
    }
    try {
        const [result] = await db.query("INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)", [name, address, latitude, longitude]);
        res.status(201).json({id: result.insertId, name, address, latitude, longitude});
    }
    catch (error) {
        console.error("Error adding school:", error.message);
        res.status(500).json({message: "Internal server error"});
    }
};

export const listSchools = async (req, res) => {
    const { latitude, longitude } = req.query;
  
    if (!latitude || !longitude) {
      return res.status(400).json({ message: "Latitude and longitude are required" });
    }
  
    try {
      const [results] = await db.query("SELECT * FROM schools");
  
      const userLat = parseFloat(latitude);
      const userLon = parseFloat(longitude);
  
      const sortedSchools = results
        .map((school) => {
          const distance = getDistance(userLat, userLon, school.latitude, school.longitude);
          return { ...school, distance };
        })
        .sort((a, b) => a.distance - b.distance);
  
      res.status(200).json(sortedSchools);
    } catch (err) {
      console.error("DB Error:", err);
      res.status(500).json({ message: "Internal server error", error: err.message });
    }
  };