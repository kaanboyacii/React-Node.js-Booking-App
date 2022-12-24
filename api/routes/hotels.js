import express from "express";
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/",verifyAdmin,createHotel);

//Update
router.put("/:id",verifyAdmin,updateHotel);

//Delete
router.delete("/:id",verifyAdmin,deleteHotel);

//Get
router.get("/find/:id",getHotel);

//Get all
router.get("/",getHotels);
router.get("/countByCity",countByCity);



export default router