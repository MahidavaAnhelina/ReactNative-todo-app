// Enum for task categories
export enum Category {
    WORK = 'Work',
    PERSONAL = 'Personal',
    FITNESS = 'Fitness',
    SHOPPING = 'Shopping',
    OTHER = 'Other',
  }

export enum Status {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  TODO = 'TODO'
}
  
  // Interface for a Task
  export interface Task {
    id: string;       // Unique identifier for each task
    title: string;    // Task title
    category: Category; // Task category
    date: string;     // ISO date string (e.g., '2024-06-06')
    time: string;     // Time string (e.g., '14:30')
    notes: string;    // Additional notes
    status: Status;
  }
  