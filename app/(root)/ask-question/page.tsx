import QuestionForm from "@/components/forms/QuestionForm";

const page = () => {
  return (
    <div>
      <h1 className="h1-bold text-logo-secondary">Ask a public Question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </div>
  );
};

export default page;
