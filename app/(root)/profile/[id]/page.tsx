import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const Profile = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="warpper page">
      <Header
        subHeader="test@gamil.com"
        title="test"
        userImg="/assets/images/dummy.jpg"
      />
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard {...card} key={card.id} />
        ))}
      </section>
    </div>
  );
};

export default Profile;
