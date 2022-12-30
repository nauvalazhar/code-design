export default function Meta({ icon: Icon, name, value }) {
  return (
    <div className="flex items-start">
      <Icon width={30} className="text-black/40 mt-2" />
      <div className="ml-6 flex flex-col">
        <span className="tracking-wider text-black/60 uppercase">{name}</span>
        <span className="font-semibold text-2xl mt-1">{value}</span>
      </div>
    </div>
  );
}
