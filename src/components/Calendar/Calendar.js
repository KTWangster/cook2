import React from "react";

const Calendar = () => {
    return (
        <div>
            <title>Google Calendar API Quickstart</title>
            <meta charSet="utf-8" />
            <p>Google Calendar API Quickstart</p>
            {/*Add buttons to initiate auth sequence and sign out*/}
            <button id="authorize_button" onclick="alert('authorize clicked')">Authorize</button>
            <button id="signout_button" onclick="alert('sign out clicked')">Sign Out</button>
            <pre id="content" />
        </div>
    );
}

export default Calendar;