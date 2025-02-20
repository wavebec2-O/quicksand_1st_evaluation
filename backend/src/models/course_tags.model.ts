import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db";

export type CourseSection = {
  courseId: number;
  tagId: string;
};

const courseSectionSchema = sequelize.define(
  "course_tags",
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },

    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "courses",
        key: "id",
      },
    },

    tagId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: "tags",
        key: "id",
      },
    },
  },
  { timestamps: true }
);

export default courseSectionSchema;
