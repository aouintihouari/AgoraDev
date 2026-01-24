const page = ({ params }: { params: { id: string } }) => {
  return <div>Tag {params.id}</div>;
};

export default page;
