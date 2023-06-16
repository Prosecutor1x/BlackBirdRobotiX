import { Drawer, Box, Typography, IconButton } from "@mui/material";
import React from "react";
import Image from "next/image";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

const MuiDrawer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  
  return (
    <>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size="large"
        aria-label="logo"
        sx={{ color: "#8054FF" }}
      >
        <MenuRoundedIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="rounded-l-xl lg:first-letter:w-[30vw] md:w-[50vw] sm:w-[75vw] w-[85vw] bg-[#FBFAFF]">
          <Box
            height={"100vh"}
            role="presentation"
            color="white"
            textAlign="center"
            bgcolor={"white"}
          >
            <Typography component="div">
              <div className="flex justify-between items-center bg-lightpink p-2 w-screen">
                <Image
                  src="/audit/logo/header.png"
                  alt="Unsnarl logo"
                  height={60}
                  width={60}
                />

                <BiArrowBack
                  color="#8054FF"
                  size={30}
                  onClick={() => setIsDrawerOpen(false)}
                />
              </div>

              <ul className="font-quicksand text-font1 px-6 flex flex-col justify-start space-y-8 font-semibold py-8">
                <li className="text-xl text-start">
                  <Link href="# " className="text-[#000000]">
                    Find Work
                  </Link>
                </li>
                <li className="text-xl text-start">
                  <Link href="# " className="text-[#000000]">
                    Find Hacker
                  </Link>
                </li>
                <li className="text-xl text-start">
                  <Link href="# " className="text-[#000000]">
                    Process
                  </Link>
                </li>
                <li className="text-xl text-start">
                  <Link href="/#FeatureAudits " className="text-[#000000]">
                    Featured Audits
                  </Link>
                </li>
                <li className="text-xl text-start">
                  <Link href="# " className="text-[#000000]">
                    FAQs
                  </Link>
                </li>
                <li className="text-xl text-start">
                  <a
                    href="https://unsnarl.gitbook.io/detectbox/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#000000]"
                  >
                    Docs
                  </a>
                </li>
                <li className="text-xl text-start">
                  <Link
                    href="/audit/early-bird-offer"
                    className="text-[#000000]"
                  >
                    Early Bird Offer
                  </Link>
                </li>
                <a href="https://app.detectbox.io">
                  <button className="btn-audit-secondary px-12 py-[0.95rem] -ml-9">
                    <span className="font-bold">Apply as an Auditor</span>
                  </button>
                </a>
                <a href="https://projects.detectbox.io" className="-ml-8">
                  <button className="btn-audit-primary px-16 py-3">
                    <span className="font-bold">Hire an Auditor</span>
                  </button>
                </a>
              </ul>
            </Typography>
          </Box>
        </div>
        
      </Drawer>
    </>
  );
};
export default MuiDrawer;
