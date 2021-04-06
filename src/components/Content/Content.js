import React from "react";
import "./Content.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
const Content = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit"> send </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          {<InputOptions Icon={ImageIcon} Title="Photo" color="#70B5f9" />}
          {
            <InputOptions
              Icon={SubscriptionIcon}
              Title="Video"
              color="#E7A33E"
            />
          }
          {<InputOptions Icon={EventNoteIcon} Title="Event" color="#C0CbCD" />}
          {
            <InputOptions
              Icon={CalendarViewDayIcon}
              Title="Write"
              color="#7FC15E"
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Content;
