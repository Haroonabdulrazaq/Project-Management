# Server Documentation

A project management API

Entry file: Index.ts (Server Root level)
Output Folder: ./dist

## Getting Started 🚀

Step 1:

- From your command line, first clone the project

Step 2:

```bash
# Clone this repository
$ git clone https://github.com/Haroonabdulrazaq/Project-Management.git

# Change directory into the repository
$ cd Project-Management
```

Step 3:

- Open in your favorite Editor

## Tools 🔧

- ExpressJs(Nodejs)
- TypeScript
- PSQL - Neon(serverless)
- ORM - Prisma
- Validation - Express Validator

## Schema

```bash
model Projects {
  id          Int      @id @default(autoincrement())
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  name        String   @db.VarChar(255)
  description String?
  due_date    DateTimestst
  Tasks       Tasks[]
}

enum TaskStatus {
  IN_PROGRESS
  COMPLETED
  PENDING
}

model Tasks {
  id          Int      @id @default(autoincrement())
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  name        String   @db.VarChar(255)
  description String?
  status      TaskStatus @default(PENDING)
  projectId   Int
  projects    Projects @relation(fields: [projectId], references: [id])
}

```

## Endpoints

### Projects Endpoint

```bash
## Sample object
{
  "name": "Project 5",
  "description": "This is project five",
  "due_date": "2024-12-30T23:59:59.999Z"
}
```

```bash
        Get All Projects
        method: GET
        url: http://localhost:3000/projects
```

```bash
        Get a ProjectById
        method: GET
        url: http://localhost:3000/projects/:id
```

```bash
        Create a Project
        method: POST
        url: http://localhost:3000/projects/
```

```bash
        Update a ProjectById
        method: PUT
        url: http://localhost:3000/projects/:id
```

```bash
        Delete a ProjectById
        method: DELETE
        url: http://localhost:3000/projects/:id
```

### Task Endpoint

```bash
## Sample object
{
  "name": "Design About Page",
  "description":"Create a visually appealing landing page.",
  "status": "COMPLETED"
}
```

```bash
        Get all tasks
        method: GET
        url: http://localhost:3000/projects/1/tasks
```

```bash
        Create a tasks
        method: POST
        url: http://localhost:3000/projects/1/tasks
```

```bash
        Update a TaskById
        method: PUT
        url: http://localhost:3000/projects/:projectId/tasks/:taskId
```

```bash
        Delete a TaskById
        method: DELETE
        url: http://localhost:3000/projects/:projectId/tasks/:taskId
```

## Author

👤 **Haroon Abdulrazaq**

- Github: [@githubhandle](https://github.com/Haroonabdulrazaq)
- Twitter: [@twitterhandle](https://twitter.com/hanq_o)
- Linkedin: [linkedin](https://www.linkedin.com/in/haroonabdulrazaq)
