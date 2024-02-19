const Card = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="hidden md:block ">
        <iframe
          width="400"
          height="250"
          src={"https://www.youtube.com/embed/y9j-BL5ocW8?si=P8DhzB965s3Cu7NB"}
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="block md:hidden">
        <iframe
          width="390"
          height="200"
          src={"https://www.youtube.com/embed/4jnzf1yj48M?si=faJ9lhtvGAeqxuMn"}
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Card;
