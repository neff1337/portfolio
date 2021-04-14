/**@jsx jsx */
import { jsx, Link, Grid } from "theme-ui";
import { motion } from "framer-motion";
//icons
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import { SiTelegram } from "@react-icons/all-files/si/SiTelegram";
import { SiBehance } from "@react-icons/all-files/si/SiBehance";
import { SiDribbble } from "@react-icons/all-files/si/SiDribbble";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";

let MotionButton = motion.custom(Link);

function IconButton({ bg, children, href }) {
  return (
    <MotionButton
      href={href}
      variant="buttonLight"
      sx={{
        bg: bg,
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      {children}
    </MotionButton>
  );
}

const ContactButtons = () => {
  return (
    <Grid
      sx={{
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gridGap: "15px",
        fontSize: [2, 3],
        color: "text",
        ":hover": {
          color: "text",
        },
      }}
    >
      <IconButton bg="#0088cc" href={"https://t.me/neff1337"}>
        <SiTelegram style={{ verticalAlign: "text-top" }} />
      </IconButton>
      <IconButton bg="#e1306c" href={"https://instagram.com/neff1337"}>
        <SiInstagram style={{ verticalAlign: "text-top" }} />
      </IconButton>
      <IconButton bg="#333" href={"https://github.com/neff1337"}>
        <SiGithub style={{ verticalAlign: "text-top" }} />
      </IconButton>
      <IconButton
        bg="#ea4335"
        href={
          "https://mail.google.com/mail/?view=cm&fs=1&to=dimadebelskiy@gmail.com"
        }
      >
        <SiGmail style={{ verticalAlign: "text-top" }} />
      </IconButton>
      <IconButton bg="#1769ff">
        <SiBehance style={{ verticalAlign: "text-top" }} />
      </IconButton>
      <IconButton bg="#ea4c89">
        <SiDribbble style={{ verticalAlign: "text-top" }} />
      </IconButton>
    </Grid>
  );
};

export default ContactButtons;
