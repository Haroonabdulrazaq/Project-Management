import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const allProjects = await prisma.projects.findMany();
    res.status(200).json({
      message: 'Projects fetched successfully!',
      data: allProjects,
    });
  } catch (error) {
    Response.json({
      status: 500,
      message: 'Could not fetch projects',
      data: error,
    });
  }
};

export const createProject = async (req: Request, res: Response) => {
  const { name, description, due_date } = req.body;
  try {
    const newProject = await prisma.projects.create({
      data: {
        name,
        description,
        due_date,
      },
    });
    res.status(201).json({
      message: 'Project created successfully!',
      data: newProject,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: 'Could not create project',
      data: error,
    });
  } finally {
    await prisma.$disconnect();
  }
};
