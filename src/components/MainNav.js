import React from "react"
// import "./MainNav.css"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SearchIcon from "@material-ui/icons/Search"
import TheatersIcon from "@material-ui/icons/Theaters"
import TvIcon from "@material-ui/icons/Tv"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    width: "30%",
    marginLeft: "35%",
    position: "fixed",
    bottom: 0,
    top: 20,
    backgroundColor: "#12435a",
    zIndex: 100,
  },
})

function SimpleBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const history = useHistory()

  useEffect(() => {
    if (value === 0) history.push("/")
    else if (value === 1) history.push("/movies")
    else if (value === 2) history.push("/series")
    else if (value === 3) history.push("/search")
  }, [value, history])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "whitesmoke" }}
        label="Home"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "whitesmoke" }}
        label="Movies"
        icon={<TheatersIcon />}
      />
      <BottomNavigationAction
        style={{ color: "whitesmoke" }}
        label="Tv-Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "whitesmoke" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  )
}

export default SimpleBottomNavigation
