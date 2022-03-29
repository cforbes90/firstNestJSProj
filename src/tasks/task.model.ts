export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
//only allows one of these values in the status because it is an enum
enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
