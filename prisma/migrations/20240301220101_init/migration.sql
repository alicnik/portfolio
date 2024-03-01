-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "showOnHomePage" DROP NOT NULL,
ALTER COLUMN "showOnHomePage" SET DEFAULT false;
