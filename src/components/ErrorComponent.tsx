import Container from "./Common/Container";
import Typography from "./Common/Typography";

interface ErrorComponentProps {
  title?: string;
  description?: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  title = "Error",
  description = "Something went wrong. Please try again later.",
}) => {
  return (
    <Container className="min-h-[250px] flex items-center">
      <div className="w-full flex flex-col justify-center space-y-2 pl-4 py-6 bg-red-100 border-l-6 border-destructive">
        <Typography variant="h1">{title}</Typography>
        <Typography variant="large" className="text-destructive">
          {description}
        </Typography>
      </div>
    </Container>
  );
};

export default ErrorComponent;
