import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users

  {
    email: "ahmed.khan@example.com",
    fullName: "Ahmed Khan",
    password: "ahmed1234",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    email: "sara.fernandes@example.com",
    fullName: "Sara Fernandes",
    password: "sara@2025",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "ravi.sharma@example.com",
    fullName: "Ravi Sharma",
    password: "ravi2025",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "maria.mohammed@example.com",
    fullName: "Maria Mohammed",
    password: "maria@2025",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "vikram.singh@example.com",
    fullName: "Vikram Singh",
    password: "vikram1234",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },

  // Male Users
  {
    email: "lucas.moore@example.com",
    fullName: "Lucas Moore",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "henry.jackson@example.com",
    fullName: "Henry Jackson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "alexander.martin@example.com",
    fullName: "Alexander Martin",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "daniel.rodriguez@example.com",
    fullName: "Daniel Rodriguez",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
