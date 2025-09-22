import React, { useState } from "react";

interface Category {
  id: number;
  titulo: string;
  descripcion: string;
}

const initialCategories: Category[] = [
  { id: 1, titulo: "Baches", descripcion: "Reportes de baches en la vía pública" },
  { id: 2, titulo: "Basura", descripcion: "Reportes de acumulación de basura" },
  { id: 3, titulo: "Semáforos", descripcion: "Reportes de semáforos dañados" },
  { id: 4, titulo: "Árboles Caídos", descripcion: "Reportes de árboles caídos en la vía pública" },
];

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (isAdding && selectedCategory) {
      setCategories([...categories, { ...selectedCategory, id: Date.now() }]);
    } else if (selectedCategory) {
      setCategories(
        categories.map((cat) =>
          cat.id === selectedCategory.id ? selectedCategory : cat
        )
      );
    }
    setSelectedCategory(null);
    setIsAdding(false);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setSelectedCategory(null);
    setIsAdding(false);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f2e] via-[#0d1b4c] to-[#0a2c77] text-white flex justify-center items-start gap-10 p-8">
      {/* Lista de categorías */}
      <div className="flex flex-col gap-4">
        <h1
          className="text-3xl font-bold mb-6 text-center"
          style={{ fontFamily: "serif" }}
        >
          Categorías
        </h1>

        <button
          onClick={() => {
            setIsAdding(true);
            setIsEditing(true);
            setSelectedCategory({ id: 0, titulo: "", descripcion: "" });
          }}
          className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700"
        >
          +Nueva Categoría
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setIsAdding(false);
              setIsEditing(false);
              setSelectedCategory(cat);
            }}
            className="px-6 py-3 rounded-md border border-blue-500 hover:bg-blue-900 transition"
          >
            {cat.titulo}
          </button>
        ))}
      </div>

      {/* Panel de detalle/edición */}
      {(selectedCategory || isAdding) && (
        <div className="bg-[#0b143a] rounded-2xl p-6 shadow-lg space-y-4 max-w-lg w-full">
          <h2
            className="text-2xl font-bold mb-4 text-center"
            style={{ fontFamily: "serif" }}
          >
            {isAdding
              ? "Nueva Categoría"
              : isEditing
              ? "Editar Categoría"
              : "Detalle Categoría"}
          </h2>

          <div>
            <label className="font-semibold">Título:</label>
            <input
              type="text"
              value={selectedCategory?.titulo || ""}
              onChange={(e) =>
                isEditing &&
                setSelectedCategory(
                  selectedCategory
                    ? { ...selectedCategory, titulo: e.target.value }
                    : null
                )
              }
              className={`w-full mt-1 p-2 rounded-md text-black ${
                !isEditing ? "bg-gray-300 cursor-not-allowed" : ""
              }`}
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="font-semibold">Descripción:</label>
            <textarea
              value={selectedCategory?.descripcion || ""}
              onChange={(e) =>
                isEditing &&
                setSelectedCategory(
                  selectedCategory
                    ? { ...selectedCategory, descripcion: e.target.value }
                    : null
                )
              }
              className={`w-full mt-1 p-2 rounded-md text-black ${
                !isEditing ? "bg-gray-300 cursor-not-allowed" : ""
              }`}
              rows={3}
              disabled={!isEditing}
            />
          </div>

          <div className="flex justify-center gap-4 mt-6">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-blue-700 px-6 py-2 rounded-full hover:bg-blue-800"
                >
                  {isAdding ? "Añadir" : "Guardar"}
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-600 px-6 py-2 rounded-full hover:bg-gray-700"
                >
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-700 px-6 py-2 rounded-full hover:bg-blue-800"
                >
                  Editar
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-600 px-6 py-2 rounded-full hover:bg-gray-700"
                >
                  Cerrar
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
