type ApplicationHeaderProps = {
  name: string;
}

const ApplicationHeader = ({ name }: ApplicationHeaderProps) => {
  return (
    <div className="w-full flex flex-row items-center justify-between bg-gray-600">
      <div className="px-5">
        <h3 className="text-xl">
          {name}
        </h3>
      </div>
      <div className="px-5 py-3 hover:bg-white/25 cursor-pointer">
        <div>X</div>
      </div>
    </div>
  );
}

export default ApplicationHeader;