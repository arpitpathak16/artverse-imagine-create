
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    author: string;
    date: string;
    summary: string;
    imageUrl: string;
    readTime: string;
  };
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link to={`/community/articles/${article.id}`}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
        <div className="aspect-video overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105" 
          />
        </div>
        <CardHeader>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">{article.author}</p>
            <Badge variant="secondary">{article.readTime} read</Badge>
          </div>
          <h3 className="line-clamp-2 text-lg font-semibold">{article.title}</h3>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-2 text-gray-600">{article.summary}</p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">
            {new Date(article.date).toLocaleDateString()}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ArticleCard;
