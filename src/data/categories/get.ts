// usado para deixar explícito que
// só podemos usar/importar este arquivo
// dentro de um server-component.
import "server-only";

import { db } from "@/db";

export const getCategories = async () => {
  const categories = await db.query.categoryTable.findMany();
  return categories;
};
