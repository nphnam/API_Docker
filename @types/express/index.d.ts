import { UserAttributes } from "../../models/user"; // Import kiểu User của bạn
declare global {
  namespace Express {
    interface Request {
      user?: UserAttributes; // Khai báo user có thể tồn tại trên request
    }
  }
}
