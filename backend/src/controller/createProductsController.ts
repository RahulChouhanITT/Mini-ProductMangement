
export const createProductController = async (
  request: Request,
  response: Response
): Promise<void> => {
  const { ProductName,Price, Category } = request.body;

  const Product = await createNewProduct(
    ProductName, 
    Price, 
    Category
  );
}
