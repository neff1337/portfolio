/**@jsx jsx*/
import ReactTooltip from "react-tooltip";
import { jsx, Avatar, Badge, Box, Flex } from "theme-ui";
import { useState } from "react";
import { motion } from "framer-motion";

import "./AvatarImage.css";

let MotionAvatar = motion(Avatar);

const AvatarImg = ({ src, showBadge, tooltip, click, data }) => {
  const [isAvatarHover, setAvatarHover] = useState(false);

  return (
    <Box my={1}>
      <ReactTooltip
        place="right"
        type="light"
        effect="solid"
        className="iconsTooltip"
        offset={{ right: 17 }}
      />
      <Flex>
        <Box
          sx={{
            bg: isAvatarHover ? "background" : "transparent",
            width: "5px",
            borderRadius: "0 20px 20px 0",
            marginRight: ["0px", "10px"],
            transition: ".5s easy",
            transitionProperty: "background-color",
          }}
        />
        <MotionAvatar
          onClick={click}
          data-index={data}
          src={src}
          data-tip={tooltip}
          sx={{
            bg: "background",
          }}
          initial={{
            borderRadius: "50%",
          }}
          whileHover={{
            borderRadius: "20px",
            x: "10px",
          }}
          onHoverStart={() => setAvatarHover(true)}
          onHoverEnd={() => setAvatarHover(false)}
        />
        <Badge
          variant="primary"
          sx={{
            display: showBadge ? "inline-block" : "none",
            m: "0 0 -5px -15px",
          }}
        />
      </Flex>
    </Box>
  );
};

export default AvatarImg;
