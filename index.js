import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import tourRoutes from './src/routes/tourRoutes.js';

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('MongoDB connected')
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
}).catch((error)=>console.log(error));

//router
app.use('/api', tourRoutes);