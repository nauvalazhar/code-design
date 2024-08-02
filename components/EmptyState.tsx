import Image from 'next/image';

const EmptyState = ({ children }) => {
  return <div className="text-center">{children}</div>;
};

const EmptyStateTitle = ({ children }) => {
  return <h2 className="text-3xl font-bold text-center">{children}</h2>;
};

const EmptyStateDescription = ({ children }) => {
  return <p className="text-xl lg:w-10/12 mx-auto mt-2">{children}</p>;
};

const EmptyStateImage = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={400} className="mx-auto" />;
};

export { EmptyState, EmptyStateTitle, EmptyStateDescription, EmptyStateImage };

export default EmptyState;
