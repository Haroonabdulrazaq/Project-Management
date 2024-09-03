import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { validationResult } from 'express-validator';

const prisma = new PrismaClient();

export const getAllProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allProjects = await prisma.projects.findMany({
      include: { Tasks: true },
    });
    if (allProjects.length === 0) {
      res.status(404).json({
        message: 'No project found',
        data: allProjects,
      });
    }
    res.status(200).json({
      message: 'Projects fetched successfully!',
      data: allProjects.reverse(),
    });
  } catch (error) {
    res.status(500).json({
      message: 'Could not fetch projects',
      data: error,
    });
  }
};

export const getProjectById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const project = await prisma.projects.findUnique({
      include: { Tasks: true },
      where: {
        id: parseInt(id),
      },
    });
    if (!project) {
      res.status(404).json({
        message: 'No project found',
        data: project,
      });
    }
    res.status(200).json({
      message: 'Project fetched successfully!',
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Could not fetch project',
      data: error,
    });
  }
};

export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, description, due_date } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({
      message: 'Oops, An error occured',
      errors: errors.array(),
    });
    return;
  }
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
    res.status(500).json({
      message: 'Could not create project',
      data: error,
    });
  } finally {
    await prisma.$disconnect();
  }
};

export const updateProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, description, due_date } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({
        message: 'Oops, An error occured',
        errors: errors.array(),
      });
      return;
    }
    const project = await prisma.projects.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        description,
        due_date,
      },
    });
    res.status(200).json({
      message: 'Project updated successfully!',
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Could not update project',
      data: error,
    });
  }
};

export const deleteProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projectId = parseInt(req.params.id);

    const project = await prisma.projects.findUnique({
      where: { id: projectId },
      include: { Tasks: true },
    });

    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }

    if (project.Tasks.length > 0) {
      res.status(400).json({
        message: 'Project has tasks, cannot delete, kindly delete all tasks',
      });
      return;
    }
    await prisma.projects.delete({
      where: {
        id: projectId,
      },
    });
    res.status(200).json({
      message: 'Project deleted successfully!',
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Could not delete project',
      data: error,
    });
  }
};
