import { Badge } from "@material-ui/core"
import { img_300, unavailable } from "../../config/config"
import "./SingleContent.css"
import { withStyles } from "@material-ui/core/styles"
import ContentModal from "../ContentModal/ContentModal"

const StyledBadge = withStyles((theme) => ({
  badge: {
    padding: "0 4px",
    color: "white",
    backgroundColor: "#12435a",
    fontWeight: "bold",
  },
}))(Badge)

function SingleContent({ id, poster, title, date, media_type, vote_average }) {
  return (
    <ContentModal media_type={media_type} id={id}>
      <StyledBadge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  )
}

export default SingleContent
