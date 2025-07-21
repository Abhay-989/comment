import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 space-y-6 max-w-xl mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="size-16 text-primary" />
      </div>
      <h3 className="text-2xl font-bold">No notes yet</h3>
      <p className="text-base text-base-content/70">
        Ready to start jotting down your thoughts? Create your first note to get started on your journey.
      </p>
      <Link to="/create" className="btn btn-primary">
        Create a New Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
