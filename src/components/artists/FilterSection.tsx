
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterSectionProps {
  searchTerm: string;
  selectedLocation: string;
  selectedSpecialty: string;
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onSpecialtyChange: (value: string) => void;
  onFilterApply: () => void;
}

const FilterSection = ({
  searchTerm,
  selectedLocation,
  selectedSpecialty,
  onSearchChange,
  onLocationChange,
  onSpecialtyChange,
  onFilterApply,
}: FilterSectionProps) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center">
        <Filter className="mr-2 h-5 w-5 text-artverse-purple" />
        <h2 className="font-medium text-gray-800">Filter Artists</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by name or location"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All locations</SelectItem>
              <SelectItem value="Jaipur">Jaipur</SelectItem>
              <SelectItem value="Varanasi">Varanasi</SelectItem>
              <SelectItem value="Mysore">Mysore</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
              <SelectItem value="Kolkata">Kolkata</SelectItem>
              <SelectItem value="Jodhpur">Jodhpur</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select value={selectedSpecialty} onValueChange={onSpecialtyChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All specialties</SelectItem>
              <SelectItem value="Oil Painting">Oil Painting</SelectItem>
              <SelectItem value="Watercolor">Watercolor</SelectItem>
              <SelectItem value="Sculpture">Sculpture</SelectItem>
              <SelectItem value="Digital Art">Digital Art</SelectItem>
              <SelectItem value="Folk Art">Folk Art</SelectItem>
              <SelectItem value="Miniature">Miniature</SelectItem>
              <SelectItem value="Fabric Art">Fabric Art</SelectItem>
              <SelectItem value="Tribal">Tribal</SelectItem>
              <SelectItem value="Mixed Media">Mixed Media</SelectItem>
              <SelectItem value="Portraits">Portraits</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Button
          onClick={onFilterApply}
          className="bg-artverse-purple text-white hover:bg-artverse-deepPurple"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;
