import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();


async function getUser(req, res) {
  const item = await prisma.userInfo.findMany();
  res.send(item);
}

async function getUserById(req, res) {
  const {
    params: { id },
  } = req;
  const user = await prisma.userInfo.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.send(user);
}



async function getUserByUserName(req, res) {
  try {
    const { value } = req.query;


    if (!value) {
      return res.status(400).json({ error: "The value parameter is required" });
    }


    const wherefilter = {
      userName: value, 
    };


    const user = await prisma.userInfo.findUnique({
      where: wherefilter,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);

  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



async function deleteUserById(req, res) {
  const {
    params: { id },
  } = req;
  const user = await prisma.userInfo.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.send(user);
}

async function postUser(req, res) {
  try {
    const {
      userName,
      password,
      email,
      Age,
      gender,
      fullName,
      phone,
      physicianInfo,
      contactName,
      healthStatus,
      insuranceDetails = "",
      relationship,
      contactPhone,
    } = req.body;
   
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.userInfo.create({
      data: {
        userName: userName.toLowerCase(),
        password:hashedPassword,
        email,
        Age,
        gender,
        fullName,
        phone,
        physicianInfo,
        contactName,
        healthStatus,
        insuranceDetails,
        relationship,
        contactPhone,
      },
    });

    res.send(user);
  } 

catch (error) {
    res
      .status(500)
      .send({
        error: error.message || "An error occurred while creating user",
      });
  }
}

async function Login(req, res) {
  const { userName, password } = req.body;
console.log(req.body)
  try {
    const user = await prisma.userInfo.findFirst({
      where: { userName: userName.toLowerCase() },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.status(200).json({ message: "Login successful" });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Failed to login" });
  }
}

async function updateUser(req, res) {
  const {
    params: { id },
    body,
  } = req;
  const user = await prisma.userInfo.update({
    data: { ...body },
    where: {
      id: parseInt(id),
    },
  });
  res.send(user);
}

export const controller = {
  getUser,
  getUserById,
  getUserByUserName,
  postUser,
  updateUser,
  deleteUserById,
  Login,
};
