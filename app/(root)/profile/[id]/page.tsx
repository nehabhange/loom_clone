import Header from "@/components/Header";

const Profile = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="warpper page">
      <Header
        subHeader="test@gamil.com"
        title="test"
        userImg="/assets/images/dummy.jpg"
      />
      <h1 className="text-2xl font-karla">USER :{id}</h1>
    </div>
  );
};

export default Profile;
