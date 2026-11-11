export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Loading" className="section-y flex flex-1 items-start">
      <div className="container-page grid items-center gap-(--space-lg) lg:grid-cols-2 lg:gap-(--gutter)">
        <div className="space-y-6">
          <div className="skeleton h-3 w-40 rounded-full" />
          <div className="skeleton h-16 w-full max-w-xl rounded-2xl sm:h-20" />
          <div className="skeleton h-16 w-4/5 max-w-lg rounded-2xl sm:h-20" />
          <div className="skeleton h-5 w-full max-w-md rounded-full" />
          <div className="flex gap-4 pt-4">
            <div className="skeleton h-14 w-48 rounded-full" />
            <div className="skeleton h-14 w-48 rounded-full" />
          </div>
        </div>
        <div className="skeleton mx-auto aspect-[4/5] w-[min(100%,22rem)] rounded-t-full rounded-b-3xl lg:mr-0 desk:w-[min(100%,40dvh,25rem)]" />
      </div>
    </div>
  );
}
