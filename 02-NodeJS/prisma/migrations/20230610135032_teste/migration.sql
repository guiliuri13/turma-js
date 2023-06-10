/*
  Warnings:

  - Added the required column `brand` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placa` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_carro" INTEGER NOT NULL,
    "id_funcionary" INTEGER NOT NULL,
    "concluded_at" DATETIME NOT NULL,
    "final_price" REAL NOT NULL,
    "operating_expense" REAL NOT NULL,
    "service" TEXT NOT NULL,
    CONSTRAINT "Service_id_funcionary_fkey" FOREIGN KEY ("id_funcionary") REFERENCES "Funcionary" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_id_carro_fkey" FOREIGN KEY ("id_carro") REFERENCES "Car" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_client" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    CONSTRAINT "Car_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Car" ("id", "id_client") SELECT "id", "id_client" FROM "Car";
DROP TABLE "Car";
ALTER TABLE "new_Car" RENAME TO "Car";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
