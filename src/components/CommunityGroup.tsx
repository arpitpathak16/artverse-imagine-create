
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

interface CommunityGroupProps {
  community: {
    id: string;
    name: string;
    members: number;
    description: string;
    imageUrl: string;
  };
}

const CommunityGroup = ({ community }: CommunityGroupProps) => {
  return (
    <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img 
          src={community.imageUrl} 
          alt={community.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105" 
        />
      </div>
      <CardHeader>
        <h3 className="text-lg font-semibold">{community.name}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <Users className="mr-1 h-4 w-4" />
          {community.members} members
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="line-clamp-2 text-gray-600">{community.description}</p>
        <Button className="w-full" asChild>
          <Link to={`/community/groups/${community.id}`}>Join Group</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommunityGroup;
