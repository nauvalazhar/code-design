import Image from 'next/image';
import { getDesigners } from 'services/user-service';

const Designers = async () => {
  const designers = await getDesigners();

  return (
    <div className="grid grid-cols-5 gap-8">
      {designers.map(designer => (
        <div
          key={designer.id}
          className="text-center bg-rose-500 text-black p-4 border-4 border-black shadow-solid"
        >
          <div className="relative size-20 mx-auto">
            <Image
              src={designer.avatar}
              alt={designer.name}
              fill
              className="rounded-full border-4 border-black"
            />
          </div>
          <h3 className="mt-4 text-lg">{designer.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Designers;
