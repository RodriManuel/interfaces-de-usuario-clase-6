function LibroCard({ libro, onAgregar }) {
  return (
    <article className="group">
        <div className="aspect-[2/3] overflow-hidden bg-neutral-100">
            <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" src={libro.imagen} alt={`Portada de ${libro.titulo}`} />
        </div>

        <div className="pt-4">
            <span className="text-xs uppercase tracking-widest text-neutral-500">
                {libro.categoria}
            </span>

            <h3 className="mt-1 text-lg font-medium">
                {libro.titulo}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {libro.autor}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {libro.descripcion}
            </p>

            <div className="mt-4 flex items-center justify-between">
                <span className="font-medium">
                    ${libro.precio}
                </span>

                <button onClick={() => onAgregar(libro)} disabled={libro.stock === 0} className="border border-neutral-900 px-4 py-2 text-sm transition hover:bg-neutral-900 hover:text-white disabled:cursor-not-allowed disabled-opacity-40">
                    {libro.stock > 0 ? "Agregar" : "Sin stock"}
                </button>
            </div>

        </div>
    </article>
  )
}

export default LibroCard
