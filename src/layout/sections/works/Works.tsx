import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/proj-1.webp'
import timerImg from './../../../assets/images/proj-2.webp'
import {Container} from "../../../components/Container";
import {AnimatePresence, motion} from "framer-motion"

// const tabsItems = ["All", "landing page", "React", "spa"]

const tabsItems: Array<{status: TabsStatusType, title: string}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "Spa",
        status: "spa"
    }
]

const worksData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 1
    },

    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react",
        id: 2
    },
]
export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus (value: TabsStatusType | "spa") {
        setCurrentFilterStatus(value)
    }

    return (
        <StyledWorks id = {"works "}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus = {changeFilterStatus}
                         currentFilterStatus = {currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                    {filteredWorks.map((w) => {
                        return (
                            <motion.div style = {{   width: "400px",
                                flexGrow: 1, maxWidth: "540px"}}
                                layout={true}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                key = {w.id}
                            >
                                <Work title={w.title}
                                      src ={w.src}
                                      text ={w.text}
                                      key = {w.id}
                                />
                            </motion.div>
                        )
                    })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
    position: relative;
`