import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { projectId } = req.params;
  const tasks = await prisma.tasks.findMany({
    where: {
      projectId: parseInt(projectId),
    },
  });
  if (tasks.length === 0) {
    res.status(404).json({
      message: 'No tasks found!',
      data: tasks,
    });
  }
  res.status(200).json(tasks);
};

export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, status } = req.body;
    const { projectId } = req.params;
    const newTask = await prisma.tasks.create({
      data: {
        name,
        description,
        status,
        projects: { connect: { id: parseInt(projectId) } },
      },
    });

    res.status(201).json({
      message: 'Fetched tasks succesfully!',
      data: newTask,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Could not fetch task',
      data: error,
    });
  }
};

export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { taskId } = req.params;
    if (taskId === undefined) {
      res.status(400).json({
        message: 'Invalid Task Id',
      });
    }
    const { name, description, status } = req.body;

    // if (!errors.isEmpty()) {
    //   res.status(400).json({
    //     message: 'Oops, An error occured',
    //     errors: errors.array(),
    //   });
    //   return;
    // }
    const task = await prisma.tasks.update({
      where: {
        id: parseInt(taskId),
      },
      data: {
        name,
        description,
        status,
      },
    });
    res.status(200).json({
      message: 'Task updated successfully!',
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Could not update task',
      data: error,
    });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { taskId } = req.params;

    await prisma.tasks.delete({
      where: {
        id: parseInt(taskId),
      },
    });
    res.status(200).json({
      message: 'Task deleted successfully!',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Could not delete task',
      data: error,
    });
  }
};
