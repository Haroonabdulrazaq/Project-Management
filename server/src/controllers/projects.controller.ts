import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProjects = async () => {
  try {
    const allProjects = await prisma.projects.findMany();
    Response.json({
      status: 200,
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
    res.json({
      status: 201,
      message: 'Project created successfully!',
      data: newProject,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: 'Could not create project',
      data: error,
    });
  }
};
