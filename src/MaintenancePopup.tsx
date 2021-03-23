import styled from '@emotion/styled';
import React from 'react';
import image from "./data/pictures/logo.png"

import * as Settings from "./Startpage/Settings/settingsHandler"

const StyledPopup = styled.div`
    position: fixed;
    z-index: 1000;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-color: var(--bg-color);
    padding:200px 100px;
    display: flex;
    justify-content: center;
    > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: 800px;
        > span {
            margin-bottom: 50px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            > p {
                margin-left: 10px;
                color: var(--accent-color);
                font-size: 1.5rem;
            }
        }
        > p {
            margin-bottom: 50px;
            > a {
                opacity: .7;
                :hover {
                    opacity: 1;
                }
            }
        }
        > div {
            width:100%;
            display: flex;
            justify-content: space-between;
        }
    }
`;

const StyledButton = styled.button`
    background-color: var(--default-color);
    color: var(--bg-color);
    border: none;
    opacity: .7;
    cursor: pointer;
    padding: 10px 20px;
    min-width: 150px;
    :hover{
        opacity: 1;
    }
`;

const MaintenanceImage = styled.img`
    width: 128px;
    height: 128px;
`;

export const MaintenancePopup = (props: { hidePopup: () => void }) => {

    return <StyledPopup>
        <div>
            <span>
                <MaintenanceImage src={image} />
                <p>luidity</p>
            </span>
            <p>
                I moved/renamed this startpage to{" "}
                <a href={"https://prettycoffee.github.io/fluidity/"}>
                    https://prettycoffee.github.io/fluidity/
                </a>
                .<br />
                You can keep using this page, but upcoming features will only be released for the new page.
                Furthermore I will not do any maintenance fixes here.<br /><br />

                Planned upcoming features are:
                <ul>
                    <li>Better settings structure</li>
                    <li>Theme organizer</li>
                    <li>Customizable fast forward search (e.g. search "deepl" and get directly redirected to "deepl.com")</li>
                    <li>export / import of your settings</li>
                    <li>Changelog where you can see the latest released features</li>
                </ul>
            </p>
            <div>
                <StyledButton onClick={() => window.location.href = "https://prettycoffee.github.io/fluidity/"}>
                    To new page
                </StyledButton>
                <StyledButton onClick={() => {
                    Settings.setValue("hideMaintenancePopup", "true");
                    props.hidePopup();
                }}>
                    Don't show this again
                </StyledButton>
                <StyledButton onClick={() => props.hidePopup()}>
                    Close
                </StyledButton>
            </div>
        </div>
    </StyledPopup>;
}