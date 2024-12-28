import { Category, Status, Task } from "@/types/task";


export const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Finish React Native project',
    category: Category.WORK,
    date: '2024-06-10',
    time: '14:00',
    notes: 'Complete the main UI screens and fix bugs',
    status: Status.TODO
  },
  {
    id: '2',
    title: 'Buy groceries',
    category: Category.SHOPPING,
    date: '2024-06-11',
    time: '18:00',
    notes: 'Milk, eggs, bread, and vegetables',
    status: Status.TODO
  },
  {
    id: '3',
    title: 'Yoga session',
    category: Category.FITNESS,
    date: '2024-06-12',
    time: '07:30',
    notes: 'Morning session at the local yoga studio',
    status: Status.TODO
  },
  {
    id: '4',
    title: 'Date night with spouse',
    category: Category.PERSONAL,
    date: '2024-06-14',
    time: '20:00',
    notes: 'Dinner at the new Italian restaurant',
    status: Status.TODO
  },
  {
    id: '5',
    title: 'Plan weekend trip',
    category: Category.OTHER,
    date: '2024-06-15',
    time: '10:00',
    notes: 'Research destinations and book tickets',
    status: Status.TODO
  },
];
