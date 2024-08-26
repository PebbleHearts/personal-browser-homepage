import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn-components/ui/select";

type CustomSelectProps = {
  options: { key: string; value: string }[];
  placeholder: string;
  value: string;
  onSelect: (value: string) => void;
};

export function CustomSelect({
  options,
  placeholder,
  value,
  onSelect,
}: CustomSelectProps) {
  return (
    <Select onValueChange={(value) => onSelect(value)} value={value}>
      <SelectTrigger className="w-[180px] bg-gray-800 text-white">
        <SelectValue>
          {value ? value : <span className="text-gray-400">{placeholder}</span>}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-gray-800 text-white">
        <SelectGroup>
          {options.map((option) => (
            <SelectItem
              key={option.key}
              value={option.value}
              className="hover:bg-gray-700"
            >
              {option.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
