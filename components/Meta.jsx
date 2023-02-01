export default function Meta({ icon: Icon, name, value }) {
  return (
    <div className="flex items-start">
      <Icon width={30} className="mt-2 text-black/40" />
      <div className="ml-6 flex flex-col">
        <span className="uppercase tracking-wider text-black/60">{name}</span>
        <span className="mt-1 text-xl font-semibold lg:text-2xl">{value}</span>
      </div>
    </div>
  );
}
