import React from "react";
import "./News.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const News = () => {
  const recentNews = (title, description) => (
    <div className="news__recentNews">
      <div className="news__recentNewsLeft">
        <span className="news__bluedot">
          <FiberManualRecordIcon />
        </span>
      </div>

      <div className="news__recentNewsRight">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
  return (
    <div className="news">
      <div className="news__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      <div className="news__widgets">
        {recentNews(
          "Abdirahman has graduated from King's",
          "After many hours of study, he has managed to complete his degree"
        )}
        {recentNews(
          "Gyms are opening up again",
          "Gym-goers excited to get back into their routines!"
        )}
        {recentNews(
          "Liverpool have won the league",
          "Abdirahman scored two great goals to secure a victory"
        )}
      </div>
    </div>
  );
};

export default News;
