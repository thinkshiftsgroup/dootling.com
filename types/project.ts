export interface ProjectI {
  id: string;
  imageSrc: string | null;
  ownerId: string;
  title: string;
  description: string;
  isPublic: boolean;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED" | string;
  totalBudget: number;
  startDate: string;
  deliveryDate: string;
  contractClauses: string | null;
  receiveEmailNotifications: boolean;
  fundsRule: boolean;
  isDeleted: boolean;
  isEscrowed: boolean;
  amountReleased: number;
  amountPending: number;
  completionPercentage: number;
  createdAt: string;
  updatedAt: string;
  _count: { contributors: number };
  projectImageUrl: string;
}
