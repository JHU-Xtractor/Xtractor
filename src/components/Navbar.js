import * as React from "react";
import LogoSmall from "./LogoSmall";
import { Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
import { Image } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';

export default function NavBar({username,profilePicture}) {

    return (
        <div style={{
            backgroundColor: "#ffffff",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            width: "40vh",
            height: "100vh",
            position: "relative",
            display: "flex",
            alignItems: "flex-start", // Align children to the top
            justifyContent: "flex-start", // Align children to the left
            flexDirection: "column", // Stack children vertically
        }}>
            <LogoSmall
                marginTop="10vh"
                marginLeft={"10vh"}
                width="104px"
                height="74px"
                display="block"
                gap="unset"
                alignItems="center"
                justifyContent="center"
                top="17px"
                left="11px"
                padding="0px 0px 0px 0px"
            ></LogoSmall>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <Link to={`/dashboard/${username}`} style={{ textDecoration: 'none' }}>
                <MyIcon
                    marginLeft={"12vh"}
                    marginTop="15vh"
                    style={{ color: "#000000" }}
                    width="37px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="left"
                    justifyContent="center"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    type="home"
                ></MyIcon>
                </Link>
                <Link to={`/dashboard/${username}`} style={{ textDecoration: 'none' }}>
                <Text
                    marginTop="16vh"
                    fontWeight={500}
                    color="rgba(66,106,220)"
                    width="10vh"
                    height="5vh"
                    display="block"
                    fontSize={"15px"}
                    gap="unset"
                    alignItems="left"
                    justifyContent="bottom"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    children="Home"
                />
                </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <MyIcon
                    marginLeft={"12vh"}
                    marginTop="20px"
                    style={{ color: "#000000" }}
                    width="37px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="left"
                    justifyContent="center"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    type="file"
                ></MyIcon>
                <Text
                    marginTop="30px"
                    fontWeight={500}
                    color="rgba(66,106,220)"
                    width="10vh"
                    height="5vh"
                    display="block"
                    fontSize={"15px"}
                    gap="unset"
                    alignItems="left"
                    justifyContent="bottom"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    children="Files"
                />
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <Link to="/uploads" style={{ textDecoration: 'none' }}>
                <MyIcon
                    marginLeft={"12vh"}
                    marginTop="20px"
                    style={{ color: "#000000" }}
                    width="37px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="left"
                    justifyContent="center"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    type="send"
                ></MyIcon>
                </Link>
                <Link to="/uploads" style={{ textDecoration: 'none' }}>
                <Text
                    marginTop="25px"
                    fontWeight={500}
                    color="rgba(66,106,220)"
                    width="10vh"
                    height="10vh"
                    display="block"
                    fontSize={"15px"}
                    gap="unset"
                    alignItems="left"
                    justifyContent="bottom"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    children="Upload"
                />
                </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <Link to={`/settings/${username}`} style={{ textDecoration: 'none' }}>
                <MyIcon
                    marginLeft={"12vh"}
                    marginTop="-15px"
                    style={{ color: "#000000" }}
                    width="37px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="left"
                    justifyContent="center"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    type="settings"
                ></MyIcon>
                </Link>
                <Link to={`/settings/${username}`} style={{ textDecoration: 'none' }}>
                <Text
                    marginTop="-7px"
                    fontWeight={500}
                    color="rgba(66,106,220)"
                    width="10vh"
                    height="10vh"
                    display="block"
                    fontSize={"15px"}
                    gap="unset"
                    alignItems="left"
                    justifyContent="bottom"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    children="Settings"
                />
                </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>

                <Image
                  style={{ borderRadius: '50%' }} // Add this line
                    marginLeft={"12vh"}
                    marginTop="10vh"
                    width="37px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="left"
                    justifyContent="center"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    src={profilePicture}
                ></Image>
                <Text
                    marginTop="10vh"
                    marginLeft={"2vh"}
                    fontWeight={500}
                    color="rgba(66,106,220)"
                    width="10vh"
                    height="10vh"
                    display="block"
                    fontSize={"15px"}
                    gap="unset"
                    alignItems="left"
                    justifyContent="bottom"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    children={username}
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>

            <Link 
                to="/" 
                onClick={() => localStorage.removeItem('token')} 
                style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <Text
                    marginTop="-7vh"
                    marginLeft={"17.5vh"}
                    fontWeight={500}
                    color="rgba(66,106,220)"
                    width="10vh"
                    height="2.5vh"
                    display="block"
                    fontSize={"10px"}
                    gap="unset"
                    alignItems="center"
                    justifyContent="bottom"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    children="Logout"
                />
                </Link>
                </div>

        </div>
    )
}
