export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      
      <a href="/" className="font-semibold text-center text-green-100 hover:text-gree-200 transition ease-linear">Voltar para o inicio</a>
    </div>
  );
}