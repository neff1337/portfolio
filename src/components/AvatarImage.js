/**@jsx jsx*/
import ReactTooltip from "react-tooltip";
import { jsx, Avatar, Badge, Box, Flex } from "theme-ui";
import { useState } from "react";
import { motion } from "framer-motion";

import "./AvatarImage.css";

const AvatarImg = ({ src, showBadge, tooltip, click, data }) => {
  const [isAvatarHover, setAvatarHover] = useState(false);
  return (
    <Box my={1}>
      <ReactTooltip
        place="right"
        type="light"
        effect="solid"
        className="iconsTooltip"
        offset={{ right: 30 }}
      />
      <motion.div
        onHoverStart={() => setAvatarHover(true)}
        onHoverEnd={() => setAvatarHover(false)}
        whileHover={{
          scale: 1.1,
        }}
      >
        <Flex>
          <Box
            sx={{
              bg: isAvatarHover ? "background" : "transparent",
              width: "10px",
              borderRadius: "0 10px 10px 0",
              marginRight: ["0px", "10px"],
            }}
          />
          <Avatar
            onClick={click}
            data-index={data}
            src={src}
            data-tip={tooltip}
            sx={{
              bg: "primary",
            }}
          />
          <Badge
            variant="primary"
            sx={{
              display: showBadge ? "inline-block" : "none",
              m: "0 0 -5px -15px",
            }}
          />
        </Flex>
      </motion.div>
    </Box>
  );
};

export default AvatarImg;
