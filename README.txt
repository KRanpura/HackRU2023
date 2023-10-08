What it does

The RUAttending web application allows users to explore and sign up for a wide variety of events by organizing event data from Rutgers getInvolved and Rutgers Handshake in the same place, while also allowing users to make their own events for other users to join. It also allows users to track their events though the personal event calendar in each user's dashboard.
How we built it

We used the MERN stack (MongoDB, Express, React, Node) to build the basic web app in VSCode and utilized GitHub for version control. HTML, TailwindCSS, and Javascript were used for the front-end components. We used web scraping to extract event data from Rutgers getInvolved and Handshake. We additionally used different APIs for RUAttending's special features, like Twilio API for the text notification feature which lets a creator of an event know when someone has signed up to attend, and Google Calendar API from Google Cloud to generate a user's event calendar in their dashboard.
Challenges we ran into

Getting the MERN app to run in general was difficult due to various problems with file structure, trouble with corrupted node packages and dependencies that we had to reinstall, git version control errors, difficulty making sure data was stored in the MongoDB database itself, etc.
Accomplishments that we're proud of

We're proud of the many features that RUAttending provides in terms of text notifications to event creators and personalized event calendars, along with the web scraping we did to gather data on Rutgers getInvolved and Handshake.
What we learned

We learned how to utilize new tools like TailwindCSS and Google Calendar API to enhance our web application, along with web scraping tools. We additionally learned how to resolve merge conflicts considering we had a slightly bigger team and often had to work on the same files using different branches.
What's next for RU Attending?

In the future, we plan to add more pictures and logos to enhance the web application, along with using more complex components of the Google Calendar API to make the event calendars automatically update more efficiently. It would also have been interesting to utilize Google Maps API to help users find events near them if we had more time.
