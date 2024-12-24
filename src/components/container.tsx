type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl min-h-screen flex flex-col mx-auto bg-white/[2%]">
      {children}
    </div>
  );
}
